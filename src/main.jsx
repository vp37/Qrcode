import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './Qrcreate/Table.css'
import { Table } from './Qrcreate/Table'
// import { Generate } from './Qrcreate/Generate'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Generate/> */}
    <Table/>
    
  </StrictMode>,
)
