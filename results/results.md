# Results of script executions

- All tests were run 5x times and in parallel and all passed. See log at the end of this document.
- TC 2 regarding verification that there is at least one wheelchair accessible z-box in Prague 9 is
  brittle. Main reason is, that lot of elements of the web application the test needs to interact with do
  not have unique identifiers. This is a problem of the web application and not the test itself.
- Current version of app did not allowed me to do explicitly check, that wheelchair accessibility of z-box
  is provided, since the true/false state is indicated only via svg icons.
- I have also experienced failure of location service which leads to failure of both test cases, since
  this service is needed.

## Reports

- HTML report is not generally included to git and it is therefore not pushed to the repo.
  You can easily run tests and check the reports on your machine. See README for this.

## Test result log

```bash
radek@tes257  ~/projects/personal/packeta-demo   main  pnpm test -- --repeat-each 5 --workers=6

> packeta-demo@1.0.0 test /home/radek/projects/personal/packeta-demo
> playwright test "--repeat-each" "5" "--workers=6"


Running 45 tests using 6 workers

  ✓  1 [chromium] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (18.8s)
  ✓  2 [chromium] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (2.3s)
  ✓  3 [chromium] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (2.3s)
  ✓  4 [chromium] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (18.4s)
  ✓  5 [chromium] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (2.2s)
  ✓  6 [chromium] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (2.5s)
  ✓  7 [chromium] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (18.2s)
  ✓  8 [chromium] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (1.8s)
  ✓  9 [chromium] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (2.3s)
  ✓  10 [chromium] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (18.2s)
  ✓  11 [chromium] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (2.6s)
  ✓  12 [chromium] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (2.7s)
  ✓  13 [chromium] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (19.3s)
  ✓  14 [chromium] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (2.9s)
  ✓  15 [chromium] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (4.4s)
  ✓  16 [firefox] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (14.7s)
  ✓  17 [firefox] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (5.9s)
  ✓  18 [firefox] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (7.3s)
  ✓  19 [firefox] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (16.5s)
  ✓  20 [firefox] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (7.0s)
  ✓  21 [firefox] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (7.5s)
  ✓  22 [firefox] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (6.3s)
  ✓  23 [firefox] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (17.6s)
  ✓  24 [firefox] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (8.5s)
  ✓  25 [firefox] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (14.0s)
  ✓  26 [firefox] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (5.5s)
  ✓  27 [firefox] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (7.1s)
  ✓  28 [firefox] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (18.0s)
  ✓  29 [firefox] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (6.0s)
  ✓  30 [firefox] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (7.2s)
  ✓  31 [webkit] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (31.9s)
  ✓  32 [webkit] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (6.9s)
  ✓  33 [webkit] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (8.5s)
  ✓  34 [webkit] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (29.6s)
  ✓  35 [webkit] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (12.2s)
  ✓  36 [webkit] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (9.2s)
  ✓  37 [webkit] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (30.5s)
  ✓  38 [webkit] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (8.7s)
  ✓  39 [webkit] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (10.4s)
  ✓  40 [webkit] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (26.9s)
  ✓  41 [webkit] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (8.7s)
  ✓  42 [webkit] › tests/specs/accessible-box.spec.ts:10:6 › in Prague 9 › there should be at least one wheelchair accessible z-box (21.1s)
  ✓  43 [webkit] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (10.2s)
  ✓  44 [webkit] › tests/specs/location-detection.spec.ts:13:6 › location detection in app › should offer closest box to my location via bottom bar widget (9.5s)
  ✓  45 [webkit] › tests/specs/location-detection.spec.ts:23:6 › location detection in app › should offer closest box to my location as top item in the box list (9.6s)

  45 passed (1.9m)

To open last HTML report run:

  pnpm exec playwright show-report


```
