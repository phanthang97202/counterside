"use client";

import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";
import { Ref, useRef, useState } from "react";

const InforPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useRouter();
  const linkRef: any = useRef(null);
  console.log("🚀 ~ InforPopup ~ navigate:", navigate);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    linkRef.current.click();
    // navigate.push("https://www.facebook.com/phanthang97202/");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // window.location.href = "https://www.facebook.com/phanthang97202/";
    // navigate.push("https://www.facebook.com/phanthang97202/");

    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="mb-[20px] h-[60px] w-[100px] flex items-center justify-center m-auto"
      >
        Thông tin mua
      </Button>
      <Modal
        title="Thông tin tài khoản game"
        visible={isModalOpen} // Change 'open' to 'visible'
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Giá: <b>600k</b>
        </p>
        <p>Acc chơi từ game mới ra (năm 2020), gần full awakend, SSR</p>
        <p>Gear tạm ổn</p>
        <p>Liên hệ qua facebook:</p>
        <a
          ref={linkRef}
          target="_blank"
          className="text-xl text-blue-600 underline"
          href="https://www.facebook.com/phanthang97202/"
        >
          Phan Thang
        </a>
      </Modal>
    </>
  );
};

export default InforPopup;
