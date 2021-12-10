import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import useCollapse from 'react-collapsed'
import "./styles.css";
import EditModal from "./EditModal";

const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: "ghost",
    handle: '.sortable-handel',
    //group: "shared",
    onEnd: function (evt) {
        //console.log(evt.clone.id);
        //blocks.map((block, blockIndex)
    }
};

export default function Sortable() {
    const [blocks, setBlocks] = useState([
        {
            id: 1,
            content: "P1",
            parent_id: null,
            type: "container",
            children: [
                {
                    id: 2,
                    content: "P1C1",
                    data: {
                        title: "P1C1",
                        selected: '',
                    },
                    width: 3,
                    type: "text",
                    parent_id: 1,
                },
                {
                    id: 3,
                    content: "P1C2",
                    data: {
                        title: "P1C2",
                        selected: '',
                    },
                    width: 3,
                    type: "text",
                    parent_id: 1,
                },
            ],
        },
        {
            id: 4,
            content: "P2",
            parent_id: null,
            type: "container",
            children: [
                {
                    id: 6,
                    content: "P2C1",
                    data: {
                        title: "P2C1",
                        selected: '',
                    },
                    width: 2,
                    type: "text",
                    parent_id: 2,
                },
                {
                    id: 7,
                    content: "P2C2",
                    data: {
                        title: "P2C2",
                        selected: '',
                    },
                    width: 2,
                    type: "text",
                    parent_id: 2,
                },
            ]
        },
        {
            id: 10,
            content: "P3",
            parent_id: null,
            type: "container",
            children: []
        }
    ]);
    const [active, setActive] = useState(false);
    const [data, setModalData] = useState([]);

    const deleteItem = (id, data = blocks) => {
        var filteredData = [];
        // blocks.forEach((item) => {
        //     if (item.id !== id) {
        //         if (item.hasOwnProperty('children') && (item.children).length) {
        //             let temp = [];
        //             (item.children).forEach((child) => {
        //                 if (child.id !== id) {
        //                     temp.push(child);
        //                 }
        //             })
        //             item.children = temp;
        //         }
        //         filteredData.push(item);
        //     }
        // });
        var testData = data.filter(function (item) {
            if (item.id !== id) {
                if (item.hasOwnProperty('children') && (item.children).length) {
                    console.log(deleteItem(id, item.children));
                }
                return true;
            } else {
                console.log(item)
                return false;
            }
        })
        setBlocks(blocks);
        console.log(testData);
    }
    const editElement = (details) => {
        setActive(!active);
        setModalData(details)
        //console.log(active);
    }
    const updateData = (obj) => {
        // blocks.forEach((item) => {
        //     if (item.id !== id) {
        //         if (item.hasOwnProperty('children') && (item.children).length) {
        //             let temp = [];
        //             (item.children).forEach((child) => {
        //                 if (child.id !== id) {
        //                     temp.push(child);
        //                 }
        //             })
        //             item.children = temp;
        //         }
        //         filteredData.push(item);
        //     }else{

        //     }
        // })
        setActive(!active);
        console.log(obj);
    }

    const processDelete = (id, list) => {
        list.forEach((item) => {
            if (item.id !== id) {
                if (item.hasOwnProperty('children') && (item.children).length) {
                    item.children = processDelete(id, item.children);
                }
                return item;
                //filteredData.push(item);
            }
        })
    }

    const test = () => {
        console.log(blocks);
    }
    const addGroup = () => {
        let groupData = {
            id: 100,
            content: "test",
            parent_id: null,
            type: "container",
            children: [
                {
                    id: 99,
                    content: "child",
                    width: 3,
                    type: "text",
                    parent_id: 100,
                },
                {
                    id: 98,
                    content: "child",
                    width: 3,
                    type: "text",
                    parent_id: 100,
                },
            ],
        };
        setBlocks([groupData, ...blocks]);
        console.log(blocks);
    }
    return (
        <div>
            <div>
                <p onClick={addGroup} className="add-group">Add group</p>
            </div>
            <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
                {blocks.map((block, blockIndex) => (
                    <BlockWrapper
                        key={block.id}
                        block={block}
                        blockIndex={[blockIndex]}
                        setBlocks={setBlocks}
                        deleteItem={deleteItem}
                        editElement={editElement}
                    />
                ))}
            </ReactSortable>
            <EditModal show={active} toggleModal={editElement} data={data} updateData={updateData} />
            <input type="button" value="Button" onClick={test} />
        </div>
    );
}
function Container({ block, blockIndex, setBlocks, deleteItem, editElement }) {
    return (
        <>
            <ReactSortable
                key={block.id}
                list={block.children}
                setList={(currentList) => {
                    setBlocks((sourceList) => {
                        const tempList = [...sourceList];
                        const _blockIndex = [...blockIndex];
                        const lastIndex = _blockIndex.pop();
                        const lastArr = _blockIndex.reduce(
                            (arr, i) => arr[i]["children"],
                            tempList
                        );
                        lastArr[lastIndex]["children"] = currentList;
                        return tempList;
                    });
                }}
                {...sortableOptions}
            >
                {block.children &&
                    block.children.map((childBlock, index) => {
                        return (
                            <BlockWrapper
                                key={childBlock.id}
                                block={childBlock}
                                blockIndex={[...blockIndex, index]}
                                setBlocks={setBlocks}
                                deleteItem={deleteItem}
                                editElement={editElement}
                            />
                        );
                    })}
            </ReactSortable>
        </>
    );
}
function BlockWrapper({ block, blockIndex, setBlocks, deleteItem, editElement }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    if (!block) return null;
    if (block.type === "container") {
        return (
            <div style={{ 'margin': '20px 10px 20px 10px' }}>
                <div className="parent-strip">
                    <div className="sortable-handel">
                        <i className="fa fa-arrows" aria-hidden="true"></i>
                    </div>
                    <div className="sortable-text">
                        {block.content}
                        <div className="icon">
                            <i className="fa fa-pencil" onClick={() => editElement({
                                id: block.id,
                                title: block.content
                            })
                            }></i>
                            <div>
                                <i className="fa fa-trash" onClick={() => deleteItem(block.id)}></i>
                            </div>
                            <i className={isExpanded ? 'fa fa-angle-down' : 'fa fa-angle-right'} aria-hidden="true"
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                            ></i>
                        </div>
                    </div>
                </div>
                <section {...getCollapseProps()}>
                    <Container
                        block={block}
                        setBlocks={setBlocks}
                        blockIndex={blockIndex}
                        deleteItem={deleteItem}
                        editElement={editElement}
                    />
                </section>
            </div>
        );
    } else {
        return (
            <div>
                <div className="child-strip" id={block.id}>
                    <div className="sortable-handel">
                        <i className="fa fa-arrows" aria-hidden="true"></i>
                    </div>
                    <div className="sortable-text">
                        {block.content}
                        <div className="icon">
                            <i className="fa fa-pencil" onClick={() => editElement({
                                id: block.id,
                                title: block.content
                            })} ></i>
                            <i className="fa fa-trash" onClick={() => deleteItem(block.id)}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
