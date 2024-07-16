import { useState } from 'react'
import { operations } from '../../utils/const'
import { Modal } from '../../components/Modal'

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<any>({})

    const openModal = (content:any) => {
        setModalContent(content)
        setModalOpen(true)
    }

    let modal = <Modal open={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} />

  return (
    <div>
        {modal}
        <div className='flex flex-col h-screen items-center'>
            <h1 className='mt-10 text-4xl font-semibold text-center'>Godswill Diego's Security Audit</h1>
            <p className='mt-5'>Select a procedure to continue</p>
            <div className='flex justify-center flex-wrap gap-8 mt-10 p-8'>
                {
                    operations.map((operation, index) => (
                        <div onClick={() => openModal(operation)} key={index} className='rounded-full p-6 shadow-2xl cursor-pointer'>
                            <p className='uppercase font-medium'>{operation.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export { Home }