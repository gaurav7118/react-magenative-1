import React, { Component, Fragment } from "react";
import CropperModal from "../modal/CropperModal";
// import TestModal from "../modal/TestModal";
//import TestModal from './../modal/TestModal';

class UploadForm extends Component {
    state = {
        showModal: false,
        imageUrl: '#'
    }
    render() {
        const imageChange = (event) => {
            var imageUrl = URL.createObjectURL(event.target.files[0]);
            this.setState({ imageUrl: imageUrl });
            this.setState({ showModal: true });
        }
        const closeModal = () => {
            this.setState({ showModal: false });
        }
        return (
            <div className="components-tools-inner-wrap">
                <div id="tab-content-update" className="Polaris-Card has-overflow custom-tab-content">
                    <div className="Polaris-Card__Section p-0">
                        <div className="Polaris-Card__SectionHeader accordion-header p-20">
                            <h3 className="Polaris-Subheading">User Setting</h3>
                        </div>
                        <div className="Polaris-FormLayout accordion-body px-20 pb-20" style={{ "display": "none" }}>
                            <div className="Polaris-FormLayout__Item" data-component-wrap="user-logo-upload">
                                <div className="">
                                    <div className="Polaris-Labelled__LabelWrapper">
                                        <div className="Polaris-Label"><label id="TextField4Label" htmlFor="TextField4" className="Polaris-Label__Text">Upload Logo</label></div>
                                    </div>
                                    <div className="Polaris-TextField has-file-upload">
                                        <input id="upload_image" type="file" className="Polaris-TextField__Input" accept="image/png, image/jpeg" onChange={imageChange} />
                                        <span className="file-upload-icon"></span>
                                        <span className="file-upload-value">Upload a png,gif, Jpeg file</span>
                                        <div className="Polaris-TextField__Backdrop"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CropperModal showModal={this.state.showModal} imageUrl={this.state.imageUrl} closeModal={closeModal} croppedImage={this.props.handleChange} fixedHeight={100} fixedWidth={100} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UploadForm;