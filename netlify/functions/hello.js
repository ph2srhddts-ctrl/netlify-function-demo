exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello Netlify Function! 手机部署成功"
    })
  }
}
