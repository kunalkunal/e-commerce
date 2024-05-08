import React from 'react';

const Toast = ({ message, variant = 'info', onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      onClose(); // Call the provided onClose callback if available
    }
  };

  return (
    <>
    <div className={`toast ${variant} show d-flex align-items-center`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Notification</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleClose}></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
    </>
  );
};

export default Toast;