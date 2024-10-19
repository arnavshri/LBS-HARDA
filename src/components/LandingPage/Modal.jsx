import React from 'react'

function Modal() {
    return (
        <div className="modal fade" id="aboutUsModalLong" tabIndex="-1" role="dialog" aria-labelledby="aboutUsModal" aria-hidden="true">
            {/* Modal  */}
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title w-100" id="aboutUsModal" style={{textAlign:"center"}}>About Us</h5>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quasi repellat praesentium voluptates doloremque sint possimus delectus minus commodi vero facere maxime, officia reprehenderit aliquam autem ab tempore iusto omnis nihil? Illum harum repellendus officia nam perspiciatis qui repellat quo! Reiciendis dolorem officia delectus hic quas accusantium enim nostrum nihil illum ad quaerat, neque rerum voluptas vel fugit provident harum eligendi? Rerum, itaque sapiente. Odit illum quam enim dolores earum, quae deleniti magni, incidunt facilis in non eius accusamus placeat reiciendis optio nulla. Possimus, maxime quidem! Exercitationem, sequi itaque praesentium veniam voluptatum eius labore quis! Aut corrupti optio obcaecati consequatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quasi repellat praesentium voluptates doloremque sint possimus delectus minus commodi vero facere maxime, officia reprehenderit aliquam autem ab tempore iusto omnis nihil? Illum harum repellendus officia nam perspiciatis qui repellat quo! Reiciendis dolorem officia delectus hic quas accusantium enim nostrum nihil illum ad quaerat, neque rerum voluptas vel fugit provident 
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal
