import React from 'react'

const DetailBox = () => {
  return (
    <div className="bg-white p-3" style={{  height: "100vh", position: "fixed", top: 0, left: "76%", width: "24%" }}>
      <div className='d-flex flex-column p-3 border-side'>
        <div className='d-flex justify-content-between'>
            <div className='d-flex flex-column'>
                <span className="fw-bold">Quickbook</span>
                <span className="text-muted">16 June, 2024</span>
                <span className="text-muted">8:15 PM</span>
            </div>
            <div>
                <span className="text-muted">Jimmy Jason</span>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5 pt-1'>
            <div className='d-flex gap-1'>
                <input type='checkbox' checked={true} />
                <span className="fw-bold">Auto-sync</span>
            </div>
            <div className='d-flex gap-1'>
                <input type='checkbox' checked={true} />
                <span className="fw-bold">Save Config</span>
            </div>
        </div>
      </div>
      <div className='d-flex flex-column mt-2'>
        <div className='d-flex justify-content-between gap-3 p-2'>
            <span className='fw-bold text-center w-50 p-1 border-side'>Comment</span>
            <span className='fw-bold text-center w-50 p-1 border-side'>Query</span>
        </div>
        <div className='form-group'>
            <label className='form-label fw-bold text-muted'>Type Comment</label>
            <textarea className='custom-textarea form-control' value="" placeholder='Start typing...' cols={50} />
        </div>
        <div className='d-flex flex-column gap-2 mt-3'>
            <button className='links-btn-2'>Add Comment</button>
            <button className='links-btn-3'>View Line Items</button>
        </div>
      </div>
      <div className='d-flex flex-column mt-3'>
        <span className='fw-bold text-center'>Payment Details</span>
        <div className='form-group'>
            <label className='form-label fw-bold text-muted'>Bill Number</label>
            <input type='text' className='custom-input form-control' value="" placeholder='Start typing...' cols={50} />
        </div>
        <div className='d-flex flex-column gap-2 mt-3'>
            <button className='links-btn-3'>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default DetailBox
