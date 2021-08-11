import { useContext } from "react";
import { Context } from "../utils/GlobalState";
import { Modal, Loader } from "rsuite";

function MyModal() {
  const [{ modal, formSuccess, loading }, dispatch] = useContext(Context);

  return (
    <div className="modal-container">
      <Modal show={modal.show} onHide={() => dispatch({ type: "HIDE_MODAL" })}>
        <Modal.Header>
          <Modal.Title>
            {loading ? null : formSuccess ? <p>Success!</p> : <p>Uh oh</p>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <Loader size="lg" className="loader" />
          ) : formSuccess ? (
            <p>
              Thank you for reaching out. I hope to get in touch with you soon
            </p>
          ) : (
            <p>
              Something went wrong.. Please try again, or reach out to me in
              another way!
            </p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyModal;
