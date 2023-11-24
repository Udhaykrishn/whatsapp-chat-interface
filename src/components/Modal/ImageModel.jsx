/* eslint-disable react/prop-types */


const ImageModel = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gray-800 p-4 max-w-3xl max-h-3xl rounded-lg relative">
        <button
          className=" top-2 right-2 text-white  -translate-y-3 text-md"
          onClick={onClose}
        >
          Close
        </button>
        <img src={imageUrl} alt="Enlarged Profile" className="w-full h-full" />
      </div>
    </div>
  );
};

export default ImageModel;
