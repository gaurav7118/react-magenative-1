import React, { useCallback, useState } from 'react';
import { Button, Stack, Modal, Heading } from '@shopify/polaris';

export default function ModalTest(props) {
    console.log(props.showModal);
    const [active, setActive] = useState(props.showModal);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    return (
        <div style={{ height: '500px' }}>
            <Modal
                large
                open={props.showModal}
                onClose={props.closeModal}
                title="Crop Image"
                primaryAction={{
                    content: 'Crop',
                    onAction: toggleActive,
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
                        <img src={props.imageUrl} height="400" width="400" />
                        <img src={props.imageUrl} height="200" width="200" />
                    </Stack>
                </Modal.Section>
            </Modal>
        </div>
    );
}
