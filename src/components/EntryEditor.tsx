import React, {useState} from 'react';

import {
    Tabs,
    Tab,
    Form,
    Card
} from '@contentful/forma-36-react-components';
import {EditorExtensionSDK, EntryFieldAPI} from '@contentful/app-sdk';
import {Field} from './Field'

interface EditorProps {
    sdk: EditorExtensionSDK;
}

interface FieldValues {
    [key: string]: any
}

const Entry = (props: EditorProps) => {
    const {entry, locales, parameters} = props.sdk

    // @ts-ignore
    let tabNames = parameters.installation.tabs
    let [tabs, setTabs] = useState([...tabNames])
    let [currentTab, setCurrentTab] = useState('General')
    let [fieldValues, setFieldValues] = useState<FieldValues>({})
    // @ts-ignore
    const fields = parameters.installation.fields;
    let inUse: Array<string> = fields.map((field: any) => field.field)
    const globalFields = fields.filter((field: any) => field.tab === "")

    //Keep track of the field values in state so we can rerender on field change
    if (!Object.values(fieldValues).length) {
        let fieldIdx = 0
        setFieldValues(Object.values(entry.fields).reduce((fields: FieldValues, field): FieldValues => {
            fields[Object.keys(entry.fields)[fieldIdx]] = field.getValue()
            fieldIdx++;
            return fields
        }, {}))

        Object.values(entry.fields).forEach((field: EntryFieldAPI) => {
            field.onValueChanged((newValue) => {
                if (fieldValues[field.id] !== newValue) {
                    fieldValues[field.id] = newValue
                    setFieldValues(Object.assign({}, fieldValues))
                }
            })
        })
    }

    let extraFields = Object.values(entry.fields).filter((field: EntryFieldAPI) => {
        return !inUse.includes(field.id)
    })

    if (extraFields.length) {
        tabNames.push('Other')
        extraFields.forEach((extraField) => {
            fields.push({
                field: extraField.id,
                tab: 'Other'
            })
        })
    }


    function renderFieldEntry(field: EntryFieldAPI, type: string | null = null, label: string | null = null, instance = {}) {
        return <Field field={field} sdk={props.sdk} locales={locales} type={type} label={label} key={'field-' + field.id} instance={instance}/>
    }

    function testFieldValue(name: string, value: any) {
        let conditionField: undefined|EntryFieldAPI = entry.fields[name]
        if (!conditionField) {
            return false
        }
        return conditionField.getValue() === value
    }

    function passesCondition(condition: any) {
        let test
        if (Array.isArray(condition.value)) {
            test = condition.value.some((val: any) => testFieldValue(condition.field, val))
        } else {
            test = testFieldValue(condition.field, condition.value)
        }
        return test
    }

    function renderField(config: any) {
        let field: undefined|EntryFieldAPI = entry.fields[config.field]
        if (!field) {
            return null
        }
        if (config.condition) {
            if (!passesCondition(config.condition)) {
                return null
            }
        }
        // @ts-ignore
        return renderFieldEntry(field, config.type, config.label)
    }

    function renderDataField(config: any) {
        let typeField: undefined|EntryFieldAPI = entry.fields["type"]
        if (!typeField) {
            return null
        }

        let show = false
        switch(typeField.getValue()) {
            case 'Q&A':
                show = true
                config['type'] = 'q&a'
                config['label'] = 'Q&A'
                break;
            case 'Photo Stack':
                show = true
                config['type'] = 'repeatable'
                config['label'] = 'Images'
                config['instance'] = {
                    title: true,
                    linkLabel: true,
                    url: true,
                    image: true,
                }
                break;
            default:
        }
        if (!show) {
            return null
        }
        return renderField(config)
    }

    if (tabNames.length !== tabs.length) {
        setTabs([...tabNames])
    }


    return <Form spacing="default" className="f36-margin--2xl">
        <Card className={"f36-padding--l f36-margin-bottom--l"}>
            {globalFields.map((field: any) => renderField(field))}
        </Card>

        <Tabs
            role="navigation"
            withDivider
        >
            {
                tabs.map((tab) => {
                    return <Tab selected={currentTab === tab} id={tab} onSelect={() => setCurrentTab(tab)}
                                key={"tab-" + tab}>
                        {tab}
                    </Tab>;
                })
            }
        </Tabs>

        {
            tabs.map(tab => {
                if (currentTab !== tab) {
                    return null;
                }
                const tabFields = fields.filter((field: any) => field.tab === tab)
                if (!tabFields.length) {
                    return null;
                }
                return <Card className={"f36-padding--l f36-margin-bottom--l"} key={'tab-content' + tab}>
                    {
                        tabFields.map((field: any) => {
                            if (field.field === 'data') {
                                return renderDataField(field)
                            }
                            return renderField(field)
                        })
                    }
                </Card>
            })
        }

    </Form>;
};

export default Entry;
