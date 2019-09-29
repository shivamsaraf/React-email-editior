import React from 'react';
import EmailEditor from 'react-email-editor'

class App extends React.Component {
  render() {
    return <div>
      <button onClick={this.exportHtml}>Export HTML</button>

      <EmailEditor
        ref={editor => this.editor = editor}
      />

      <button onClick={this.saveDesign} onLoad={this.onLoad}>Save Design</button>
    </div>
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }
  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', design)
    })
  }
  onLoad = () => {
    const json = /* DESIGN JSON GOES HERE */
    this.editor.loadDesign(json)
  }
}

export default App;
