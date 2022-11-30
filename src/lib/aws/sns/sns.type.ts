/**
 * Generated by @skyleague/therefore@v1.0.0-local
 * Do not manually touch this
 */
/* eslint-disable */
import AjvValidator from 'ajv'
import type { ValidateFunction } from 'ajv'

export interface SNSMessageAttribute {
    Type: string
    Value: string
}

export interface SNSMessageAttributes {
    [k: string]: SNSMessageAttribute | undefined
}

export interface SNSMessage {
    SignatureVersion: string
    Timestamp: string
    Signature: string
    SigningCertUrl: string
    MessageId: string
    Message: string
    MessageAttributes: SNSMessageAttributes
    Type: string
    UnsubscribeUrl: string
    TopicArn: string
    Subject: string
    Token?: string
}

export interface SNSEventRecord {
    EventVersion: string
    EventSubscriptionArn: string
    EventSource: string
    Sns: SNSMessage
}

export const SNSEventRecord = {
    validate: require('./schemas/sns-event-record.schema.js') as ValidateFunction<SNSEventRecord>,
    get schema() {
        return SNSEventRecord.validate.schema
    },
    get errors() {
        return SNSEventRecord.validate.errors ?? undefined
    },
    is: (o: unknown): o is SNSEventRecord => SNSEventRecord.validate(o) === true,
    assert: (o: unknown) => {
        if (!SNSEventRecord.validate(o)) {
            throw new AjvValidator.ValidationError(SNSEventRecord.errors ?? [])
        }
    },
} as const

export interface SNSEvent {
    Records: SNSEventRecord[]
}

export const SNSEvent = {
    validate: require('./schemas/sns-event.schema.js') as ValidateFunction<SNSEvent>,
    get schema() {
        return SNSEvent.validate.schema
    },
    get errors() {
        return SNSEvent.validate.errors ?? undefined
    },
    is: (o: unknown): o is SNSEvent => SNSEvent.validate(o) === true,
    assert: (o: unknown) => {
        if (!SNSEvent.validate(o)) {
            throw new AjvValidator.ValidationError(SNSEvent.errors ?? [])
        }
    },
} as const