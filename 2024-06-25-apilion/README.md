According to the feedback from Apillon, this script proposes to test JSSDK:
- When calling `OnChainRegistry` multiple times, whether the created `loggerContract` instances point to the same worker.
- The increment of `nextSequence` when called once per minute.

The result shows the SDK work as expected. The `loggerContract` instances point to the same worker.

For the increment of `nextSequence`, we simple run the script every 1 minute and sampling 10 minutes to check the increment of `nextSequence`. The raw data:

```
36577955
36578353
36578749
36579128
36579471
36579808
36580136
36580452
36580846
36581183
36581510
```

The avg increment is 355.5.

In conclusion, the SDK is functioning as expected. The log records increase by approximately 355.5 per minute. However, it is important to note that there may be multiple records in one sequence and the `type` and `nonce` filters are applied within the SDK. To ensure that no records are missed, it is recommended to set the `count` parameter to a large number such as 10000.
