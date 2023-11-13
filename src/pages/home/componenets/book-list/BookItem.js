import React from 'react'
import { BookCard, CardDate, CardDesc, CardPagesize, CardTitle, DeleteButton, EditButton } from './book-list.s'
import { Space } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useDeleteBookMutation } from '../../../../store/services/bookApi'
import { useDispatch } from 'react-redux'
import { setEdiatble, setNotification, toggleMenu } from '../../../../store/slice/appSlice'
import { useAuth } from '../../../../hooks'

export const BookItem = (props) => {
  const {isbn, title, author, cover, published} = props
  const [deleteBook] = useDeleteBookMutation()
  const dispatch = useDispatch()
  const {user} = useAuth()

  const handleDelete = () => {
    deleteBook({id: isbn, user})
      .unwrap()
      .then(() => dispatch(setNotification({text: "Success deleted book"})))
      .catch(() => {
        dispatch(setNotification({text: "Unexpexted error", type: "error"}))
      })
  }

  const handleEdit = () => {
    dispatch(setEdiatble(props))
    dispatch(toggleMenu(true))
  }

  return (
          <BookCard>
            <CardTitle>{title}</CardTitle>
            <CardDesc>
              {cover}
            </CardDesc>
            <Space style={{justifyContent: "space-between"}}>
              <CardDate>{author}{" - "}{published}</CardDate>
              <CardPagesize>{0} page</CardPagesize>
            </Space>
            <div className="actions">
              <DeleteButton onClick={handleDelete} className="actions_button">
                <DeleteOutlined />
              </DeleteButton>
              <EditButton onClick={handleEdit} className="actions_button">
                <EditOutlined />
              </EditButton>
            </div>
          </BookCard>
  )
}
