# Results of script executions

- All tests were run 5x times and in parallel and all passed. See log at the end of this document.
- TC 2 regarding verification that there is at least one wheelchair accessible z-box in Prague 9 is
  brittle. Main reason is, that lot of elements of the web application the test needs to interact with do
  not have unique identifiers. This is a problem of the web application and not the test itself.
- I have also experienced failure of location service which leads to failure of both test cases, since
  this service is needed.

## Reports

- HTML report is not generally included to git and it is therefore not pushed to the repo.
  You can easily run tests and check the reports on your machine. See README for this.

## Test result log

```bash

bedna@syb-m1  ~/repos/personal/packeta-demo   tc2  pnpm test --repeat-each 5

> packeta-demo@1.0.0 test /Users/bedna/repos/personal/packeta-demo
> playwright test --repeat-each 5

✔ in Prague 9 (0.23675ms)

Running 45 tests using 4 workers

  ✓  1 [chromium] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (2.3s)
  ✓  2 [chromium] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (17.0s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.25725
  type: 'suite'
  ...
  ✓  3 [chromium] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (17.1s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.257875
  type: 'suite'
  ...
  ✓  4 [chromium] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (2.3s)
  ✓  5 [chromium] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (1.8s)
  ✓  6 [chromium] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (2.0s)
  ✓  7 [chromium] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (16.8s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.258333
  type: 'suite'
  ...
  ✓  8 [chromium] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (1.5s)
  ✓  9 [chromium] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (1.9s)
  ✓  10 [chromium] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (16.3s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.398625
  type: 'suite'
  ...
  ✓  11 [chromium] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (2.7s)
  ✓  12 [chromium] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (2.8s)
  ✓  13 [chromium] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (16.6s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.260709
  type: 'suite'
  ...
  ✓  14 [chromium] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (1.5s)
  ✓  15 [chromium] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (2.2s)
  ✓  16 [firefox] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (14.0s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.236792
  type: 'suite'
  ...
  ✓  17 [firefox] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (5.0s)
  ✓  18 [firefox] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (5.2s)
  ✓  19 [firefox] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (10.8s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.255291
  type: 'suite'
  ...
  ✓  20 [firefox] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (3.9s)
  ✓  21 [firefox] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (2.4s)
  ✓  22 [firefox] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (14.1s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.263959
  type: 'suite'
  ...
  ✓  23 [firefox] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (5.9s)
  ✓  24 [firefox] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (4.5s)
  ✓  25 [firefox] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (10.4s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.270833
  type: 'suite'
  ...
  ✓  26 [firefox] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (2.8s)
  ✓  27 [firefox] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (4.4s)
  ✓  28 [firefox] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (21.0s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.3065
  type: 'suite'
  ...
  ✓  29 [firefox] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (2.8s)
  ✓  30 [firefox] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (4.3s)
  ✓  31 [webkit] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (13.8s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.69
  type: 'suite'
  ...
  ✓  32 [webkit] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (4.1s)
  ✓  33 [webkit] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (3.0s)
  ✓  34 [webkit] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (11.9s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.460417
  type: 'suite'
  ...
  ✓  35 [webkit] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (3.7s)
  ✓  36 [webkit] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (3.2s)
  ✓  37 [webkit] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (11.9s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.361417
  type: 'suite'
  ...
  ✓  38 [webkit] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (3.0s)
  ✓  39 [webkit] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (3.7s)
  ✓  40 [webkit] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (12.3s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.464875
  type: 'suite'
  ...
  ✓  41 [webkit] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (4.7s)
  ✓  42 [webkit] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (4.2s)
  ✓  43 [webkit] › tests/specs/accessible-box.spec.ts:11:7 › there should be at least one wheelchair accessible z-box (10.1s)
TAP version 13
# Subtest: in Prague 9
ok 1 - in Prague 9
  ---
  duration_ms: 0.749958
  type: 'suite'
  ...
  ✓  44 [webkit] › tests/specs/location-detection.spec.ts:13:7 › location detection in app › should offer closest box to my location via bottom bar widget (2.9s)
  ✓  45 [webkit] › tests/specs/location-detection.spec.ts:23:7 › location detection in app › should offer closest box to my location as top item in the box list (3.3s)

  45 passed (1.6m)

To open last HTML report run:

  pnpm exec playwright show-report
```
