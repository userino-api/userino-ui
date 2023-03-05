import { useState } from 'react'

function useModalState(isVisibleDefault = false) {
  const [isVisible, setIsVisible] = useState(isVisibleDefault)
  const onOpen = () => setIsVisible(true)
  const onClose = () => setIsVisible(false)

  return {
    isVisible,
    onClose,
    onOpen,
  }
}

export default useModalState
