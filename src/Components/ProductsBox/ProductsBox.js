import React, { useState } from 'react'
import "./ProductsBox.css"
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal'
import EditModal from '../EditModal/EditModal'

export default function ProductsBox() {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)

    const acceptDelete = () => {
        setIsShowDeleteModal(false)
    }

    const rejectDelete = () => {
        setIsShowDeleteModal(false)
    }
    const closeDetailsModal = () => {
        setIsShowDetailsModal(false)
    }
    const closeEditModal = () => {
        setIsShowEditModal(false)
    }
    const submitEditModal = () => {
        setIsShowEditModal(false)

    }


    return (
        <>
            <tbody>
                <tr className='productsBox-table-tr'>
                    <th className='productsBox-table-tr-td'>
                        <img src="/" alt="pic" />
                    </th>
                    <th className='productsBox-table-tr-td'>عکس </th>
                    <th className='productsBox-table-tr-td'>عکس </th>
                    <th className='productsBox-table-tr-td'>
                        <div>
                            <button className='productsBox-table-tr-td-btn details' onClick={() => setIsShowDetailsModal(true)}>جزئیات</button>
                            <button className='productsBox-table-tr-td-btn edit' onClick={() => setIsShowEditModal(true)}>ویرایش</button>
                            <button className='productsBox-table-tr-td-btn delete' onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                        </div>
                    </th>
                </tr>
            </tbody>
            {isShowDeleteModal && <DeleteModal accept={acceptDelete} reject={rejectDelete}></DeleteModal>}
            {isShowEditModal && <EditModal close={closeEditModal} submit={submitEditModal}></EditModal>}
            {isShowDetailsModal && <DetailsModal close={closeDetailsModal}></DetailsModal>}

        </>
    )
}




