const ReadProcessedDetails_Schema = {
    name: "ReadProcessedDetails",
    baseType: "HistoryReadDetails",
    fields: [
        { name: "startTime", fieldType: "DateTime" },
        { name: "endTime", fieldType: "DateTime" },
        { name: "processingInterval", fieldType: "DateTime" },
        { name: "aggregateType", isArray: true, fieldType: "NodeId" },
        { name: "aggregateConfiguration", fieldType: "AggregateConfiguration" }
    ]
};
export {ReadProcessedDetails_Schema};