import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./CropperModal.css";
import { Stack, Modal, Card, Button } from '@shopify/polaris';
import axios from "axios";

export const CropperModal = (props) => {
  const [cropper, setCropper] = useState();
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      var croppedData = cropper.getCroppedCanvas({ width: props.fixedWidth, height: props.fixedHeight }).toDataURL();
      axios
        .post("https://localhost/magenative_changes/index.php/shopifymobilenew/app-drawer/loadimage", { image: croppedData })
        .then((response) => {
          props.croppedImage('headerIcon', response.data);
          cropper.destroy();
          props.closeModal();
        })
        .catch((error) => {
          alert(error);
        });
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
                    style={{ height: 400, width: 500 }}
                    dragMode="move"
                    zoomTo={0.5}
                    //initialAspectRatio={16 / 9}
                    aspectRatio={props.fixedWidth / props.fixedHeight}//checked
                    preview=".img-preview"
                    src={props.imageUrl}
                    viewMode={1}
                    minCropBoxWidth={props.fixedWidth}
                    minCropBoxHeight={props.fixedHeight}
                    minCanvasWidth={0}
                    minCanvasHeight={0}
                    zoomOnTouch={true}
                    responsive={true}
                    //autoCropArea={1}
                    //checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
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
              <Button onClick={() => { cropper.reset() }}><span className="fa fa-refresh"></span></Button>
              <Button onClick={() => { cropper.rotate(90) }}><span className="fa fa-undo"></span></Button>
              <Button onClick={() => { cropper.rotate(-90) }}><span className="fa fa-rotate-right"></span></Button>
              <Button onClick={() => { cropper.scale(-1, 1) }}><span className="fa fa-arrows-h"></span></Button>
              <Button onClick={() => { cropper.scale(1, -1) }}><span className="fa fa-arrows-v"></span></Button>
              <Button onClick={() => { cropper.zoom(-0.1) }}><span className="fa fa-search-minus"></span></Button>
              <Button onClick={() => { cropper.zoom(0.1) }}><span className="fa fa-search-plus"></span></Button>
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default CropperModal;
