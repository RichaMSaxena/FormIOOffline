
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const json = '{"display":"form","settings":{"pdf":{"id":"1ec0f8ee-6685-5d98-a847-26f67b67d6f0","src":"https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"}},"components":[{"label":"Owner name","tableView":true,"key":"ownerName","type":"textfield","input":true},{"label":"Tenant name","tableView":true,"key":"tenantName","type":"textfield","input":true},{"label":"Description","autoExpand":false,"tableView":true,"key":"description","type":"textarea","input":true},{"label":"Upload photo","tableView":false,"image":true,"webcam":true,"fileTypes":[{"label":"","value":""}],"key":"uploadPhoto","type":"file","input":true},{"label":"Form letter details","attrs":[{"attr":"","value":""}],"refreshOnChange":false,"key":"formLetterDetails","type":"htmlelement","input":false,"tableView":false},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]}'

export default function App() {
  //var customHTML = "<html><head> <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'><link rel='stylesheet' href='https://cdn.form.io/formiojs/formio.full.min.css'><script src='https://cdn.form.io/formiojs/formio.full.min.js'></script><script type='text/javascript'>window.onload = function() {Formio.createForm(document.getElementById('formio'), " + json + ");};</script></head><body><div id='formio'></div></body></html>"
  // var customHTML = "<html><head> <link rel='stylesheet' href=" + require('./src/formio/app/bootstrap/css/bootstrap.min.css') + "><link rel='stylesheet' href=" + require('./src/formio/dist/formio.full.min.css') + "><script src=" + require('./src/formio/dist/formio.full.min.js') + "></script><script type='text/javascript'>window.onload = function() {Formio.createForm(document.getElementById('formio'), " + json + ");};</script></head><body><div id='formio'></div></body></html>"
  var customHTML = "<html><head><script src=" + require('./src/assets/formio.full.min.js') + "></script>" +
    "<script type='text/javascript'>window.onload = function() {Formio.createForm(document.getElementById('formio'), " + json + ");};</script>" +
    "</head> <body><div id='formio'></div></body></html > "
  // var customHTML = "<html><head> <link rel='stylesheet' href="+require('./src/formio/app/bootstrap/css/bootstrap.min.css')+"><link rel='stylesheet' href='formio/dist/formio.full.min.css'><script src='formio/dist/formio.full.min.js'></script><script type='text/javascript'>window.onload = function() {Formio.createForm(document.getElementById('formio'), " + json + ");};</script></head><body><div id='formio'></div></body></html>"

  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ margin: 20 }}
        source={{ html: customHTML }}
        javaScriptCanOpenWindowsAutomatically={false}
        setBuiltInZoomControls={true} />
      {/* <Formio src="https://example.form.io/example" onSubmit={console.log} /> */}
    </View>
  );
}; 