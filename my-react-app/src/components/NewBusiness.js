// Modeled AddTask example, 1:03:25

const NewBusiness = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Last Name</label>
            <input type='text' placeholder="Client's Last Name" />
        </div>
        <div className="form-control">
            <label>First Name</label>
            <input type='text' placeholder="Client's First Name" />
        </div>
        <div className="form-control">
            <label>Address</label>
            <input type='text' placeholder="Client's Address" />
        </div>
        <div className='form-control form-control-check'>
            <label>Document Submitted</label>
            <input type='checkbox' />
        </div>
        <input type='submit' value='Add Business' className='btn btn-block' />
    </form>
  )
}

export default NewBusiness