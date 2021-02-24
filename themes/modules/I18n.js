const NextI18Next = require('next-i18next').default
const getConfig = require('next/config').default
const {publicRuntimeConfig} = getConfig();

const NextI18NextInstance = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: publicRuntimeConfig.LANG,
  otherLanguages: ['en'],
  localePath: "lang",
  browserLanguageDetection: false,
  serverLanguageDetection: false
})

module.exports = NextI18NextInstance