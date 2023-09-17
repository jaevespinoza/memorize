import React, { useState, useEffect } from "react";

const AlertComponent = ({ show, success }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the alert when the "show" prop is true

    if (show) {
      setIsVisible(true);

      // Automatically hide the alert after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      // Clean up the timer when the component unmounts or "show" prop changes
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [show]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    true && (
      <div
        className={`alert ${
          success ? "alert-success" : "alert-danger"
        } alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x`}
        role="alert"
        style={{ width: 200 }}
      >
        <div className="container game-container__notification__content">
          {success ? (
            <>
              <i className="bi bi-check-circle"></i> Success!
            </>
          ) : (
            <>
              <i className="bi bi-exclamation-triangle"></i> Alert!
            </>
          )}
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          />
        </div>
      </div>
    )
  );
};

export default AlertComponent;
