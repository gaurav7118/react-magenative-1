import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./CropperModal.css";
import { Stack, Modal, Card, Button } from '@shopify/polaris';

export const CropperModal = (props) => {
  //const [image, setImage] = useState(defaultSrc);
  //const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  // const onChange = (e) => {
  //     e.preventDefault();
  //     let files;
  //     if (e.dataTransfer) {
  //         files = e.dataTransfer.files;
  //     } else if (e.target) {
  //         files = e.target.files;
  //     }
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //         setImage(reader.result);
  //     };
  //     reader.readAsDataURL(files[0]);
  // };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      //setCropData(cropper.getCroppedCanvas().toDataURL());
      props.croppedImage('headerIcon', cropper.getCroppedCanvas().toDataURL());
      props.closeModal();
    }
  };

  return (
    <div>
      <Modal
        large
        open={props.showModal}
        onClose={props.closeModal}
        title="Crop the image (200X200)"
        primaryAction={{
          content: 'Crop & Save',
          onAction: getCropData,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: props.closeModal,
          },
        ]}
      >
        <Modal.Section>
          <Stack>
            <Stack.Item>
              <Card>
                <Card.Section>
                  <Cropper
                    style={{ height: "100%", width: "68%" }}
                    dragMode="move"
                    //zoomTo={0.5}
                    //initialAspectRatio={16 / 9}
                    aspectRatio={30 / 30}
                    preview=".img-preview"
                    src={props.imageUrl}
                    viewMode={1}
                    minCropBoxWidth={50}
                    minCropBoxHeight={50}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                    cropBoxResizable={false}
                    guides={true}
                  />
                </Card.Section>
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Card>
                <Card.Section>
                  <p>Preview</p>
                  <div className="img-preview" style={{ width: "200px", height: "200px" }} />
                </Card.Section>
              </Card>
            </Stack.Item>
            <Stack.Item>
              <Button onClick={() => { cropper.reset() }}><span class="fa fa-refresh"></span></Button>
              <Button onClick={() => { cropper.rotate(90) }}><span className="fa fa-undo"></span></Button>
              <Button onClick={() => { cropper.rotate(-90) }}><span className="fa fa-rotate-right"></span></Button>
              <Button onClick={() => { cropper.scale(-1, 1) }}><span class="fa fa-arrows-h"></span></Button>
              <Button onClick={() => { cropper.scale(1, -1) }}><span class="fa fa-arrows-v"></span></Button>
              <Button onClick={() => { cropper.zoom(-0.1) }}><span class="fa fa-search-minus"></span></Button>
              <Button onClick={() => { cropper.zoom(0.1) }}><span class="fa fa-search-plus"></span></Button>
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default CropperModal;
