import { useState } from 'react'
import { operations } from '../../utils/const'
import { Modal } from '../../components/Modal'
import { isIpAddress } from '../../utils/helpers'
import { toast } from 'react-toastify'

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<any>({})
    const [ipAddress, setIpAddress] = useState('')
    const [scan, setScan] = useState('')
    const [ipClass, setIpClass] = useState('hidden')

    const openModal = (content:any) => {
        setScan(content.title)
        setIpClass('hidden')
        setModalContent(content)
        setModalOpen(true)
    }

    const continueScan = (e: any) => {
        e.preventDefault()
        setIpClass('')
    }

    const startScan = () => {
        if (isIpAddress(ipAddress)) {
            toast.success('Scanning...')
            return;
        } else {
            toast.error('Please enter a valid IP address')
            return;
        }
    }

    let modal = <Modal open={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} continueScan={continueScan} />

  return (
    <div>
        {modal}
        <div className='flex flex-col h-screen items-center'>
            <h1 className='mt-10 text-4xl font-semibold text-center'>Godswill Diego's Security Audit</h1>
            <p className='mt-5'>Select a procedure to continue</p>
            <div className='flex justify-center flex-wrap gap-8 my-10 p-8'>
                {
                    operations.map((operation, index) => (
                        <div onClick={() => openModal(operation)} key={index} className='rounded-full p-6 shadow-2xl cursor-pointer'>
                            <p className='uppercase font-medium'>{operation.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className={ipClass}>
                <label className='mb-4 font-medium'>Enter IP Address:</label>
                <input type='text' className='block mb-5 input input-bordered' value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
                <button onClick={startScan} className='btn btn-success' type="button">Start {scan}</button>
            </div>
        </div>
    </div>
  )
}

export { Home }