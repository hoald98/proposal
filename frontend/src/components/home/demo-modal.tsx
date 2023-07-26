/**
 * @since 2023/07/16
 * @author ThinhHV <thinh@thinhhv.com>
 * @description description
 * @copyright (c) 2023 Company Platform
 */

import Modal from '@/components/shared/modal'
import { useState, Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import Image from 'next/image'

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean
  setShowDemoModal: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="/">
            <img src='/logo.png' className='h-6 w-6 mr-2' />
          </a>
          <h3 className="font-display text-2xl font-bold">Precedent</h3>
          <p className="text-sm text-gray-500">
            Precedent is an opinionated collection of components, hooks, and utilities for your
            Next.js project.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false)

  const DemoModalCallback = useCallback(() => {
    return <DemoModal showDemoModal={showDemoModal} setShowDemoModal={setShowDemoModal} />
  }, [showDemoModal, setShowDemoModal])

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  )
}
