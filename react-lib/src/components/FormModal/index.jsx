import React, { useState } from "react";
import { Modal, Form, Button } from "antd";
import omit from "omit.js";

/**
 * @param {btn} {()=>ReactNode} 弹窗按钮
 * @param {children} modal内容
 * @param {okText} string  确定按钮内容
 * @param {cancelText} string 取消按钮内容
 * @param {Footer} {props=>ReactNode} 底部内容
 * @param {Content} {props=>ReactNode} Modal内容
 */
const FormModal = ({
  btn,
  Content,
  cancelText = "取消",
  okText = "确定",
  Footer = null,
  submitHandle,
  cancelHandle,
  editHandle,
  isForm = true,
  autoClose = true,
  initialValues = null,
  autoVisible = false,
  ...rest
}) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(autoVisible);
  const [extraProps, setExtraProps] = useState({});
  const [btnProps, setBtnProps] = useState(null);
  const toExtraProps = { setExtraProps, setBtnProps };

  const onOk = () => {
    if (isForm) {
      form.validateFields().then((values) => {
        submitHandle({ ...values, ...extraProps }).then(() => {
          if (!autoClose) return;
          form.resetFields();
          setVisible(false);
        });
      });
      return;
    }
    submitHandle({ ...extraProps });
    if (!autoClose) return;
    setVisible(false);
  };

  const onCancel = () => {
    form.resetFields();
    setVisible(false);
    if (!cancelHandle) return;
    cancelHandle();
  };

  const ModalButton = () => {
    if (btn) {
      return btn();
    }
    return <Button type="primary">添 加</Button>;
  };

  const modalConfig = {
    okButtonProps: btnProps || {},
    onCancel,
    onOk,
    okText,
    cancelText,
  };
  const combineBtnProps = {
    ...btnProps,
    style: { marginRight: 16, ...btnProps?.style },
  };
  if (!Footer) {
    modalConfig.footer = (
      <>
        <Button type="primary" onClick={onOk} {...combineBtnProps}>
          确定
        </Button>
        <Button onClick={onCancel} style={{ margin: 0 }}>
          取消
        </Button>
      </>
    );
  } else {
    modalConfig.footer = (
      <Footer form={form} {...omit(modalConfig, ["footer"])} />
    );
  }

  return (
    <>
      <span
        onClick={() => {
          setVisible(true);
          if (initialValues) {
            form.setFieldsValue(initialValues);
            return;
          }
          if (editHandle) {
            editHandle();
          }
        }}
      >
        <ModalButton />
      </span>
      {visible && (
        <Modal
          centered
          closable={false}
          maskClosable={false}
          getContainer={() => document.getElementById("modalRoot")}
          visible
          {...rest}
          {...modalConfig}
        >
          <Content form={form} {...toExtraProps} />
        </Modal>
      )}
    </>
  );
};

export default FormModal;
