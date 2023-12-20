export class CreateEasyDto {}


export interface Event {
    Records: Record[];
}

export interface Record {
    eventVersion: string;
    ses:          Ses;
  eventSource: string;
}

export interface Ses {
    receipt: Receipt;
    mail:    Mail;
}

export interface Mail {
    timestamp:        string;
    source:           string;
    messageId:        string;
    destination:      string[];
    headersTruncated: boolean;
    headers:          Header[];
    commonHeaders:    CommonHeaders;
}

export interface CommonHeaders {
    returnPath: string;
    from:       string[];
    date:       string;
    to:         string[];
    messageId:  string;
    subject:    string;
}

export interface Header {
    name:  string;
    value: string;
}

export interface Receipt {
    timestamp:            string;
    processingTimeMillis: number;
    recipients:           string[];
    spamVerdict:          Verdict;
    virusVerdict:         Verdict;
    spfVerdict:           Verdict;
    dkimVerdict:          Verdict;
    dmarcVerdict:         Verdict;
    dmarcPolicy:          string;
    action:               Action;
}

export interface Action {
    type:     string;
    topicArn: string;
}

export interface Verdict {
    status: string;
}
