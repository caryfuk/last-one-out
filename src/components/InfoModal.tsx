import React from 'react'
import cx from 'classnames'

import Styles from './InfoModal.module.css'

type InfoModalProps = {
  visible: boolean
  humanTurn: boolean
  onClose: () => void
}

export const InfoModal = ({ visible, humanTurn, onClose }: InfoModalProps) => {
  return (
    <div className={cx(Styles.root, { [Styles.visible]: visible })}>
      <div className={Styles.content}>
        <span>{humanTurn ? 'You lost! 😭' : 'You won! 🎉'}</span>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}