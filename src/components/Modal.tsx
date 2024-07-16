import { MouseEventHandler } from 'react';

const Modal = ({
  open,
  onClose,
  content,
}: {
  open: boolean;
  onClose: MouseEventHandler<HTMLElement>;
  content: any;
}) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      {/* card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl w-[650px] shadow p-10 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'
        >
          X
        </button>
        <div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <img src={content.image} alt={content.title} className='w-60 rounded-lg' />
            </div>
            <div>
              <h2 className='card-title'>{content.title}</h2>
              <p>{content.description}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
