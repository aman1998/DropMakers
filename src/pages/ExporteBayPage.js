import React from 'react';

import { PrivatePageTemplate, ButtonBackPage } from '../components/';

const ExporteBayPage = ({from, to}) => {
  return (
    <PrivatePageTemplate>
      <section className='export container'>
        <div className='export-header'>
          <ButtonBackPage />
          <h1 className='title'>Import Inventory from <span>{from}</span></h1>
        </div>
        <p className='text-1'>{`This section is used to import inventory for ${from} > ${to} dropshipping model.`}</p>
        <p>
        If you have an Excel spreadsheet with your Amazon listings and corresponding eBay items - you can import them all together using this tool.
        The table must contain the following columns:
        </p>
        <div className='items'>
          <div>required – Source eBay Item ID or URL</div>
          <div>required – Target Amazon listing ASIN or URL</div>
          <div>optional – Preferred price for Amazon listing</div>
          <div>optional – Current SKU (if you need to keep it, especially for your own listings</div>
        </div>
        <p className='text-3'>
          Save the spreadsheet as CSV (.csv) or Excel (.xls, .xlsx) and upload it below  Download sample CSV
          Click Preview and specify corresponding columns
          Click Start Import and wait for the system to import your inventory
          Use this tool with caution. If you think something went wrong - please contact Support immediately!
        </p>
        <p>
          IMPORTANT <br />
          If you import listings you created manually (images, description etc.) - make sure you specify their Current SKU in 4th column of the import file. Otherwise you may loose your manually created listings!
        </p>  
        <form className='form'>
          <button className='btn'>Preview</button>
          <button className='btn btn-upload'>Selected file</button>
          <div>File not selected</div>
        </form>
      </section>
    </PrivatePageTemplate>
  )
}

export default ExporteBayPage
