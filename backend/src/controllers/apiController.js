const axios = require("axios");

exports.getFilesList = async (req, res) => {
  try {
    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      {
        headers: {
          Authorization: "Bearer aSuperSecretKey",
        },
      }
    );
    const files = response.data.files;
    res.json({ files });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la lista de archivos" });
  }
};

exports.getFormattedData = async (req, res) => {
  try {
    const response = await axios.get(
      "https://echo-serv.tbxnet.com/v1/secret/files",
      {
        headers: {
          Authorization: "Bearer aSuperSecretKey",
        },
      }
    );

    const files = response.data.files;
    const formattedData = [];

    for (const file of files) {
      try {
        const fileResponse = await axios.get(
          `https://echo-serv.tbxnet.com/v1/secret/file/${file}`,
          {
            headers: {
              Authorization: "Bearer aSuperSecretKey",
            },
          }
        );

        const lines = fileResponse.data
          .trim()
          .split("\n")
          .map((line) => {
            const [text, hex, number] = line.split(",");

            if (text && number && hex) {
              return {
                text,
                number,
                hex,
              };
            }

            return null;
          });

        const validLines = lines.filter((line) => line !== null);

        formattedData.push({ file, lines: validLines });
      } catch (fileError) {
        console.error(
          `Error al obtener el archivo ${file}:`,
          fileError.message
        );
      }
    }

    res.json(formattedData);
  } catch (error) {
    // console.error(error);
    res
      .status(500)
      .json({ error: "Error al obtener los datos de los archivos" });
  }
};
