import React from 'react'
import { withTranslation } from 'themes/modules/I18n'
import Layout from 'themes/layouts/Admin'

const Error = ({ statusCode, t }) => {
  if (statusCode == 404) {
    return (
      <Layout title =' ' description=' '>
        <div>
          <h1 className="title-green" style={{ textAlign: "center", fontSize: "8vw" }}>404</h1>
          <h2 className="title-green" style={{ textAlign: "center" }}>Link không tồn tại</h2>
        </div>
      </Layout>
    )
  }

  return <Layout title =' ' description=' '>
    <div>
      <h1 className="title-green" style={{ textAlign: "center", fontSize: "8vw" }}>ERROR</h1>
      <h2 className="title-green" style={{ textAlign: "center" }}>Có lỗi xảy ra, xin vui lòng thử lại!</h2>
    </div>
  </Layout>
}

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ({ statusCode } = res)
  } else if (err) {
    ({ statusCode } = err)
  }
  return {
    namespacesRequired: ['common','menu','pages'],
    statusCode,
  }
}

Error.defaultProps = {
  statusCode: null,
}


export default withTranslation('common')(Error)