import React, { useCallback, useRef, useState } from 'react';
import { Button, Modal, Stack, Select, TextField } from '@shopify/polaris';

export default function EditModal(props) {
    const DISCOUNT_LINK = 'https://polaris.shopify.com/';
    const [value, setValue] = useState(props.data.title);
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const handleChange = useCallback((newValue) => {
        setValue(newValue), []
    });

    const handleEdit = () => {
        console.log(props.data);
        let returnData = {
            id: props.data.id,
            title: value,
            select: selected
        }
        props.updateData(returnData);
    }

    const options = [
        { label: 'Select', value: '' },
        { label: 'Web Url', value: 'web-url' },
        { label: 'Collection', value: 'collection' },
    ];
    return (
        <div style={{ height: '500px' }}>
            <Modal
                open={props.show}
                onClose={props.toggleModal}
                title="Edit"
                primaryAction={{
                    content: 'Edit',
                    onAction: handleEdit,
                }}
                secondaryActions={[
                    {
                        content: 'Close',
                        onAction: props.toggleModal,
                    },
                ]}
            >
                <Modal.Section>
                    <Stack vertical>
                        <Stack.Item>
                            <TextField
                                label="Title"
                                value={value}
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </Stack.Item>
                        <Stack.Item fill>
                            <Select
                                label="Link type"
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                        </Stack.Item>
                    </Stack>
                </Modal.Section>
            </Modal>
        </div>
    );
}
