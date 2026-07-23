(() => {
  // assets/js/case-data.js
  var CASE_OVERVIEW_SUMMARY = "\uD3ED\uD48D\uC6B0\uAC00 \uCE58\uB358 \uBC24, \uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4\uC5D0\uC11C \uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C \uB9AC\uAC00 \uC228\uC9C4 \uCC44 \uBC1C\uACAC\uB410\uB2E4. \uBC14\uB2E5\uC740 \uC816\uC5B4 \uC788\uACE0 \uCC28\uB2E8\uAE30\uB294 \uB0B4\uB824\uAC00 \uC788\uB2E4.";
  var CASE_OVERVIEW_DETAILS = `\uACF5\uC5F0\uC774 \uB04A\uAE34 \uC9C0 \uC624\uB798\uB41C \uD3D0\uADF9\uC7A5\uC5D0 \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uC815\uC804 \uC2E0\uACE0\uAC00 \uC811\uC218\uB410\uB2E4. \uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C \uB9AC\uB294 \uBC30\uC804 \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 \uD63C\uC790 \uAC74\uBB3C \uC548\uC73C\uB85C \uB4E4\uC5B4\uAC14\uC9C0\uB9CC, \uC57D\uC18D\uD55C \uC2DC\uAC04\uC774 \uC9C0\uB098\uB3C4\uB85D \uBC16\uC73C\uB85C \uB098\uC624\uC9C0 \uC54A\uC558\uACE0 \uC5F0\uB77D\uB3C4 \uB04A\uACBC\uB2E4.

\uC5BC\uB9C8 \uB4A4 \uD76C\uBBF8\uD55C \uBE44\uC0C1\uB4F1\uB9CC \uCF1C\uC9C4 \uC9C0\uD558 \uBC30\uC804\uC2E4\uC5D0\uC11C \uB9C8\uD06C\uAC00 \uC228\uC9C4 \uCC44 \uBC1C\uACAC\uB410\uB2E4. \uADF8\uC758 \uACC1\uC5D0\uB294 \uC5F4\uB824 \uC788\uB294 \uC791\uC5C5\uAC00\uBC29\uC774 \uB193\uC5EC \uC788\uC5C8\uACE0, \uBC14\uB2E5\uC740 \uC774\uC0C1\uD560 \uB9CC\uD07C \uC816\uC5B4 \uC788\uC5C8\uB2E4. \uBCBD\uBA74\uC758 \uCC28\uB2E8\uAE30\uB294 \uB0B4\uB824\uAC00 \uC788\uC5C8\uC9C0\uB9CC \uC124\uBE44\uAC00 \uACE0\uC7A5 \uB09C \uAC83\uC778\uC9C0, \uB204\uAD70\uAC00 \uC190\uC744 \uB304 \uAC83\uC778\uC9C0\uB294 \uC54C \uC218 \uC5C6\uB2E4.

\uC678\uBD80 \uCE68\uC785\uC744 \uB2E8\uC815\uD560 \uB9CC\uD55C \uD754\uC801\uB3C4, \uB9C8\uD06C\uAC00 \uC65C \uC774\uACF3\uC5D0 \uC624\uB798 \uBA38\uBB3C\uB800\uB294\uC9C0 \uC124\uBA85\uD560 \uAE30\uB85D\uB3C4 \uC544\uC9C1 \uBC1C\uACAC\uB418\uC9C0 \uC54A\uC558\uB2E4. \uB2E8\uC21C\uD55C \uC791\uC5C5 \uC0AC\uACE0\uCC98\uB7FC \uBCF4\uC774\uB294 \uD604\uC7A5\uC5D0\uB294 \uC11C\uB85C \uB9DE\uC9C0 \uC54A\uB294 \uD754\uC801\uB4E4\uC774 \uB0A8\uC544 \uC788\uB2E4. \uB9C8\uD06C\uB294 \uC815\uB9D0 \uC218\uB9AC \uB3C4\uC911 \uC0AC\uACE0\uB97C \uB2F9\uD55C \uAC83\uC77C\uAE4C, \uC544\uB2C8\uBA74 \uB204\uAD70\uAC00 \uC774 \uBC24\uC758 \uD3ED\uD48D\uC6B0\uB97C \uC774\uC6A9\uD55C \uAC83\uC77C\uAE4C?`;
  var CASE_OVERVIEW = `${CASE_OVERVIEW_SUMMARY}

${CASE_OVERVIEW_DETAILS}`;
  var ROUNDS = [
    {
      no: 1,
      title: "\uBC30\uC804\uC2E4 \uBC1C\uACAC \uD604\uC7A5",
      intro: "\uB9C8\uD06C\uAC00 \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC791\uC5C5\uD558\uB358 \uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4\uC785\uB2C8\uB2E4.",
      image: "assets/electrical-room.png",
      clues: [
        { id: "r1_breaker", title: "\uB0B4\uB824\uAC04 \uCC28\uB2E8\uAE30", text: "\uCC28\uB2E8\uAE30\uB294 \uB0B4\uB824\uAC00 \uC788\uC9C0\uB9CC, \uC774\uAC83\uB9CC\uC73C\uB85C \uC0AC\uACE0 \uC6D0\uC778\uC744 \uB2E8\uC815\uD560 \uC218\uB294 \uC5C6\uB2E4." },
        { id: "r1_water", title: "\uC816\uC740 \uBC14\uB2E5", text: "\uBC14\uB2E5\uC758 \uBB3C\uC740 \uD3ED\uD48D\uC6B0\uC640 \uAD00\uACC4\uC788\uC5B4 \uBCF4\uC778\uB2E4." },
        { id: "r1_toolbag", title: "\uC791\uC5C5\uAC00\uBC29", text: "\uC791\uC5C5\uAC00\uBC29\uC740 \uB204\uAD70\uAC00 \uAE09\uD788 \uB193\uC740 \uB4EF \uC5F4\uB824 \uC788\uB2E4." }
      ]
    },
    {
      no: 2,
      title: "\uB9C8\uD06C\uC758 \uC791\uC5C5 \uD754\uC801",
      intro: "\uBC30\uC804\uC2E4 \uBC16 \uBCF5\uB3C4\uC5D0\uC11C \uB9C8\uD06C\uAC00 \uB0A8\uAE34 \uC791\uC5C5 \uD754\uC801\uC774 \uBC1C\uACAC\uB410\uC2B5\uB2C8\uB2E4.",
      image: "assets/images/round-02-mark-work.png",
      clues: [
        { id: "r2_glove", title: "\uC190\uC0C1\uB41C \uC7A5\uAC11", text: "\uC7A5\uAC11 \uD55C\uCABD\uC5D0 \uCC22\uC5B4\uC9C4 \uD754\uC801\uC774 \uB0A8\uC544 \uC788\uB2E4." },
        { id: "r2_schedule", title: "\uC218\uB9AC \uC77C\uC815\uD45C", text: "\uC77C\uC815\uD45C\uC5D0\uB294 \uB9C8\uD06C\uAC00 \uC608\uC815\uC5D0 \uC5C6\uB358 \uAD6C\uC5ED\uC744 \uD655\uC778\uD588\uB2E4\uB294 \uD754\uC801\uC774 \uC788\uB2E4." },
        { id: "r2_key", title: "\uB0A1\uC740 \uC5F4\uC1E0", text: "\uC5F4\uC1E0\uB294 \uADF9\uC7A5 \uC77C\uBC18 \uCD9C\uC785\uBB38\uBCF4\uB2E4 \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uC5D0 \uC5B4\uC6B8\uB824 \uBCF4\uC778\uB2E4." }
      ]
    },
    {
      no: 3,
      title: "\uD3D0\uADF9\uC7A5 \uBD84\uC7A5\uC2E4",
      intro: "\uBD84\uC7A5\uC2E4\uC5D0\uB294 \uC0AC\uAC74\uACFC \uBB34\uAD00\uD574 \uBCF4\uC774\uB358 \uBB3C\uAC74\uB4E4\uC774 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4.",
      image: "assets/images/round-03-dressing-room.png",
      clues: [
        { id: "r3_spray", title: "\uBB34\uC0C9 \uC2A4\uD504\uB808\uC774 \uBCD1", text: "\uB77C\uBCA8\uC774 \uC5C6\uB294 \uC2A4\uD504\uB808\uC774 \uBCD1\uC774 \uD654\uC7A5\uB300 \uC704\uC5D0 \uB193\uC5EC \uC788\uB2E4." },
        { id: "r3_residue", title: "\uD558\uC580 \uC794\uB958\uBB3C", text: "\uD654\uC7A5\uB300 \uD45C\uBA74\uC5D0 \uBB3C\uC5D0 \uB179\uC744 \uB4EF\uD55C \uD558\uC580 \uACB0\uC815\uC774 \uB0A8\uC544 \uC788\uB2E4." },
        { id: "r3_ticket", title: "\uCC22\uAE34 \uC624\uB798\uB41C \uD2F0\uCF13", text: "\uD2F0\uCF13 \uC870\uAC01\uC740 \uCD5C\uADFC \uACF5\uC5F0\uC758 \uAC83\uC774 \uC544\uB2C8\uB2E4." }
      ]
    },
    {
      no: 4,
      title: "\uACFC\uAC70 \uAE30\uB85D \uBCF4\uAD00\uC2E4",
      intro: "\uC624\uB798 \uC7A0\uACA8 \uC788\uB358 \uAE30\uB85D \uBCF4\uAD00\uC2E4\uC5D0\uC11C \uACFC\uAC70\uC640 \uC5F0\uACB0\uB418\uB294 \uC790\uB8CC\uAC00 \uB098\uC654\uC2B5\uB2C8\uB2E4.",
      image: "assets/images/round-04-archive.png",
      clues: [
        { id: "r4_news", title: "12\uB144 \uC804 \uC2E0\uBB38", text: "\uC2E0\uBB38\uC740 \uADF9\uC7A5 \uAE08\uD654 \uC808\uB3C4 \uC0AC\uAC74\uC744 \uB2E4\uB8E8\uACE0 \uC788\uB2E4." },
        { id: "r4_gold_list", title: "\uAE08\uD654 \uBAA9\uB85D", text: "\uC7A5\uBD80\uC5D0\uB294 \uC0AC\uB77C\uC9C4 \uAE08\uD654\uC640 \uBCF4\uAD00 \uC704\uCE58\uAC00 \uD45C\uC2DC\uB418\uC5B4 \uC788\uB2E4." },
        { id: "r4_connection", title: "\uB0A1\uC740 \uC0AC\uC9C4", text: "\uC0AC\uC9C4 \uC18D \uB450 \uC0AC\uB78C\uC740 \uB9C8\uD06C\uC640 \uADF8\uB79C\uD2B8\uB85C \uBCF4\uC778\uB2E4." }
      ]
    }
  ];
  var COMPANIONS = [
    { id: "hyeseon", name: "\uCD5C\uC608\uC120", role: "\uCC28\uBD84\uD55C \uB2E8\uC11C \uC815\uB9AC", image: "assets/companion-hyeseon-v4.jpg?v=lookalike2" },
    { id: "jinho", name: "\uCF69\uC9C4\uD638", role: "\uC2E0\uC911\uD55C \uAC00\uC124 \uAC80\uC99D", image: "assets/companion-jinho-v4.jpg?v=lookalike2" },
    { id: "chulgu", name: "\uB0A8\uCD9C\uAD6C", role: "\uC9C1\uC124\uC801 \uD604\uC7A5 \uAD00\uCC30", image: "assets/companion-chulgu-v4.jpg?v=lookalike2" },
    { id: "sangmin", name: "\uC774\uC131\uBBFC", role: "\uB178\uB828\uD55C \uC2DC\uAC04 \uC804\uB7B5\uAC00", image: "assets/companion-sangmin-v4.jpg?v=lookalike2" }
  ];
  var TIME_ROOM_HINTS = {
    1: [
      "\uBC30\uC804\uC2E4 \uC548\uCABD\uAE4C\uC9C0 \uBC88\uC9C4 \uBB3C\uC758 \uC591\uC740 \uBB38\uD2C8\uC73C\uB85C \uB4E4\uC5B4\uC628 \uBE57\uBB3C\uB9CC\uC73C\uB85C \uC124\uBA85\uD558\uAE30 \uC5B4\uB835\uB2E4. \uB204\uAD70\uAC00 \uD604\uC7A5\uC5D0 \uBB3C\uC744 \uB354\uD588\uC744 \uAC00\uB2A5\uC131\uC744 \uC0DD\uAC01\uD574 \uBCF4\uC790.",
      "\uB9C8\uD06C\uC758 \uC190\uACFC \uD314\uC5D0 \uB0A8\uC740 \uD754\uC801\uC740 \uB2E8\uC21C\uD55C \uB099\uC0C1\uBCF4\uB2E4 \uC804\uAE30 \uCDA9\uACA9 \uAC00\uB2A5\uC131\uC744 \uBA3C\uC800 \uD655\uC778\uD574\uC57C \uD55C\uB2E4\uB294 \uAC10\uC2DD \uC758\uACAC\uACFC \uB9DE\uB2FF\uC544 \uC788\uB2E4.",
      "\uCC28\uB2E8\uAE30\uB294 \uB9C8\uD06C\uAC00 \uC4F0\uB7EC\uC9C4 \uB4A4 \uB0B4\uB824\uAC04 \uC815\uD669\uC774 \uC788\uB2E4. \uBC1C\uACAC \uB2F9\uC2DC \uCC28\uB2E8\uAE30\uAC00 \uB0B4\uB824\uAC00 \uC788\uC5C8\uB2E4\uACE0 \uD574\uC11C \uC0AC\uACE0 \uC21C\uAC04\uC5D0\uB3C4 \uC804\uAE30\uAC00 \uB04A\uACA8 \uC788\uC5C8\uB358 \uAC83\uC740 \uC544\uB2C8\uB2E4."
    ],
    2: [
      "\uC218\uB9AC \uC77C\uC815\uD45C\uC758 \uB367\uC4F4 \uBA54\uBAA8\uB294 \uB9C8\uD06C\uAC00 \uACE0\uC7A5 \uC2E0\uACE0 \uAD6C\uC5ED\uC744 \uBC97\uC5B4\uB098 \uC624\uB798\uB41C \uBCF4\uAD00 \uACF5\uAC04\uC744 \uD655\uC778\uD588\uB2E4\uB294 \uB73B\uC73C\uB85C \uC77D\uD78C\uB2E4.",
      "\uB0A1\uC740 \uC5F4\uC1E0\uC758 \uB9C8\uBAA8 \uD615\uD0DC\uB294 \uADF9\uC7A5 \uCD9C\uC785\uBB38 \uC5F4\uC1E0\uBCF4\uB2E4 \uC624\uB798\uB41C \uBCF4\uAD00\uD568 \uC790\uBB3C\uC1E0\uC5D0 \uB354 \uAC00\uAE5D\uB2E4. \uB9C8\uD06C\uAC00 \uBB34\uC5C7\uC744 \uC5F4\uC5C8\uB294\uC9C0 \uC0DD\uAC01\uD574 \uBCF4\uC790.",
      "\uC5F4\uB824 \uC788\uB358 \uC791\uC5C5\uAC00\uBC29\uC5D0\uB294 \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uC744 \uD655\uC778\uD558\uB824\uB358 \uBA54\uBAA8\uAC00 \uB0A8\uC544 \uC788\uB2E4. \uB9C8\uD06C\uB294 \uC608\uC815\uB41C \uC218\uB9AC \uC678\uC5D0 \uBB34\uC5B8\uAC00\uB97C \uBC1C\uACAC\uD588\uB358 \uAC83\uC73C\uB85C \uBCF4\uC778\uB2E4."
    ],
    3: [
      "\uD558\uC580 \uC794\uB958\uBB3C\uC740 \uBB3C\uC5D0 \uC27D\uAC8C \uB179\uACE0 \uC804\uAE30\uAC00 \uD750\uB974\uAE30 \uC26C\uC6B4 \uD658\uACBD\uC744 \uB9CC\uB4DC\uB294 \uC131\uC9C8\uC774 \uC788\uB2E4. \uC816\uC740 \uBC30\uC804\uC2E4\uACFC \uC5F0\uACB0\uD574\uC11C \uBCF4\uC790.",
      "\uB77C\uBCA8 \uC5C6\uB294 \uC2A4\uD504\uB808\uC774 \uBCD1\uC740 \uBD84\uC7A5\uC6A9\uD488\uC774 \uC544\uB2C8\uB77C \uC561\uCCB4\uB97C \uC77C\uC815\uD55C \uBC94\uC704\uC5D0 \uBFCC\uB9AC\uB294 \uB370 \uC0AC\uC6A9\uB410\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uB2E4.",
      "\uBC30\uC804\uC2E4 \uBC14\uB2E5\uC758 \uBB3C\uC5D0\uC11C\uB3C4 \uBD84\uC7A5\uC2E4\uC758 \uD558\uC580 \uC794\uB958\uBB3C\uACFC \uBE44\uC2B7\uD55C \uC131\uBD84\uC774 \uD655\uC778\uB410\uB2E4. \uB450 \uC7A5\uC18C\uC758 \uD754\uC801\uC740 \uD558\uB098\uC758 \uC900\uBE44 \uACFC\uC815\uC77C \uC218 \uC788\uB2E4."
    ],
    4: [
      "\uB0A1\uC740 \uC0AC\uC9C4\uC740 \uB9C8\uD06C\uC640 \uADF8\uB79C\uD2B8\uAC00 12\uB144 \uC804\uC5D0\uB3C4 \uC11C\uB85C \uC54C\uACE0 \uC9C0\uB0C8\uC74C\uC744 \uBCF4\uC5EC\uC900\uB2E4. \uB450 \uC0AC\uAC74\uC740 \uC6B0\uC5F0\uD788 \uAC19\uC740 \uADF9\uC7A5\uC5D0\uC11C \uBC8C\uC5B4\uC9C4 \uAC83\uC774 \uC544\uB2C8\uB2E4.",
      "\uAE08\uD654 \uBAA9\uB85D\uACFC \uB2F9\uC2DC \uAE30\uB85D\uC744 \uD568\uAED8 \uBCF4\uBA74 \uADF8\uB79C\uD2B8\uC5D0\uAC8C \uACFC\uAC70 \uC808\uB3C4\uAC00 \uB4DC\uB7EC\uB098\uB294 \uAC83\uC744 \uB9C9\uC544\uC57C \uD560 \uC9C1\uC811\uC801\uC778 \uB3D9\uAE30\uAC00 \uC0DD\uAE34\uB2E4.",
      "\uC7A5\uBD80\uC758 \uD45C\uC2DC\uC640 \uC624\uB798\uB41C \uC0AC\uC9C4\uC744 \uD568\uAED8 \uBCF4\uBA74 \uADF8\uB79C\uD2B8\uB294 \uC0AC\uB77C\uC9C4 \uAE08\uD654\uC758 \uD589\uBC29\uC744 \uC54C\uACE0 \uC788\uC5C8\uB2E4. \uB9C8\uD06C\uAC00 \uBC1C\uACAC\uD55C \uAE30\uB85D\uC740 \uADF8 \uBE44\uBC00\uC744 \uB4DC\uB7EC\uB0BC \uC218 \uC788\uC5C8\uB2E4."
    ]
  };
  var TIME_ROOM_HINT_TERMS = {
    1: [
      ["\uBB3C", "\uBE57\uBB3C", "\uBC30\uC804\uC2E4"],
      ["\uC804\uAE30", "\uCDA9\uACA9", "\uAC10\uC804", "\uC190", "\uD314"],
      ["\uCC28\uB2E8\uAE30", "\uC804\uAE30", "\uC4F0\uB7EC\uC9C4"]
    ],
    2: [
      ["\uC77C\uC815\uD45C", "\uBA54\uBAA8", "\uBCF4\uAD00", "\uAD6C\uC5ED"],
      ["\uC5F4\uC1E0", "\uBCF4\uAD00\uD568", "\uC790\uBB3C\uC1E0"],
      ["\uC791\uC5C5\uAC00\uBC29", "\uBCF4\uAD00\uD568", "\uBA54\uBAA8", "\uBC1C\uACAC"]
    ],
    3: [
      ["\uD558\uC580", "\uC794\uB958\uBB3C", "\uC804\uAE30", "\uBB3C"],
      ["\uC2A4\uD504\uB808\uC774", "\uC561\uCCB4", "\uBD84\uC7A5"],
      ["\uBC30\uC804\uC2E4", "\uC794\uB958\uBB3C", "\uC131\uBD84", "\uBD84\uC7A5\uC2E4"]
    ],
    4: [
      ["\uC0AC\uC9C4", "\uB9C8\uD06C", "\uADF8\uB79C\uD2B8", "12\uB144"],
      ["\uAE08\uD654", "\uBAA9\uB85D", "\uADF8\uB79C\uD2B8", "\uC808\uB3C4"],
      ["\uC7A5\uBD80", "\uADF8\uB79C\uD2B8", "\uAE08\uD654", "\uAE30\uB85D"]
    ]
  };
  var ENDING = [
    {
      title: "12\uB144 \uC804, \uC0AC\uB77C\uC9C4 \uAE08\uD654",
      lead: "\uBAA8\uB4E0 \uC77C\uC740 \uD3D0\uADF9\uC7A5\uC5D0\uC11C \uBC8C\uC5B4\uC9C4 \uAE08\uD654 \uC808\uB3C4 \uC0AC\uAC74\uC5D0\uC11C \uC2DC\uC791\uB410\uB2E4.",
      story: "12\uB144 \uC804 \uADF9\uC7A5\uC758 \uAE08\uD654\uAC00 \uC0AC\uB77C\uC84C\uACE0, \uADF8\uB79C\uD2B8\uB294 \uADF8 \uAE08\uD654\uC758 \uD589\uBC29\uACFC \uC7A5\uBD80\uAC00 \uAC00\uC9C4 \uC758\uBBF8\uB97C \uC54C\uACE0 \uC788\uC5C8\uB2E4. \uC0AC\uAC74\uC740 \uBBF8\uC81C\uB85C \uB0A8\uC558\uC9C0\uB9CC \uB2F9\uC2DC\uC758 \uC2E0\uBB38, \uAE08\uD654 \uBAA9\uB85D\uACFC \uC7A5\uBD80, \uAD00\uACC4\uC790 \uC0AC\uC9C4\uC740 \uBC84\uB824\uC9C0\uC9C0 \uC54A\uC558\uB2E4. \uB204\uAD70\uAC00 \uADF8 \uAE30\uB85D\uC744 \uD3D0\uADF9\uC7A5\uC758 \uC624\uB798\uB41C \uBCF4\uAD00 \uACF5\uAC04 \uAE4A\uC219\uC774 \uC228\uACBC\uACE0, \uADF8\uB79C\uD2B8\uC5D0\uAC8C\uB294 \uC808\uB300\uB85C \uB2E4\uC2DC \uC138\uC0C1\uC5D0 \uB098\uC640\uC11C\uB294 \uC548 \uB420 \uACFC\uAC70\uAC00 \uB418\uC5C8\uB2E4.",
      evidence: ["12\uB144 \uC804 \uC2E0\uBB38", "\uAE08\uD654 \uBAA9\uB85D\uACFC \uC7A5\uBD80", "\uC624\uB798\uB41C \uAD00\uACC4\uC790 \uC0AC\uC9C4"],
      image: "assets/images/ending-01-gold-theft-v2.png"
    },
    {
      title: "\uC608\uC815\uC5D0 \uC5C6\uB358 \uBC1C\uACAC",
      lead: "\uC804\uAE30 \uC218\uB9AC\uB97C \uB9E1\uC740 \uB9C8\uD06C\uB294 \uACE0\uC7A5 \uAD6C\uC5ED \uB108\uBA38\uC5D0\uC11C \uC228\uACA8\uC9C4 \uAE30\uB85D\uC744 \uBC1C\uACAC\uD588\uB2E4.",
      story: "\uD3ED\uD48D\uC6B0\uAC00 \uCE58\uB358 \uB0A0, \uB9C8\uD06C\uB294 \uC804\uAE30 \uC774\uC0C1\uC744 \uC810\uAC80\uD558\uB2E4 \uC218\uB9AC \uC77C\uC815\uC5D0 \uC5C6\uB358 \uAD6C\uC5ED\uAE4C\uC9C0 \uB4E4\uC5B4\uAC14\uB2E4. \uB0A1\uC740 \uC5F4\uC1E0\uAC00 \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uC744 \uC5F4\uC5C8\uACE0, \uADF8 \uC548\uC5D0\uB294 12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4\uB97C \uAC00\uB9AC\uD0A4\uB294 \uC2E0\uBB38\uACFC \uBAA9\uB85D, \uC7A5\uBD80, \uC0AC\uC9C4\uC774 \uB0A8\uC544 \uC788\uC5C8\uB2E4. \uD604\uC7A5\uC5D0 \uC5F4\uB824 \uC788\uB358 \uC791\uC5C5 \uAC00\uBC29\uC740 \uB9C8\uD06C\uAC00 \uC218\uB9AC\uB97C \uBA48\uCD94\uACE0 \uC774 \uB73B\uBC16\uC758 \uAE30\uB85D\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC5C8\uC74C\uC744 \uBCF4\uC5EC\uC900\uB2E4. \uB9C8\uD06C\uC758 \uBC1C\uACAC\uC740 \uADF8\uB79C\uD2B8\uC758 \uACFC\uAC70\uB97C \uB2E4\uC2DC \uB4DC\uB7EC\uB0BC \uACB0\uC815\uC801\uC778 \uC704\uD611\uC774\uC5C8\uB2E4.",
      evidence: ["\uB367\uC4F4 \uC218\uB9AC \uC77C\uC815", "\uB0A1\uC740 \uC5F4\uC1E0\uC640 \uBCF4\uAD00\uD568", "\uC5F4\uB9B0 \uC791\uC5C5 \uAC00\uBC29"],
      image: "assets/images/ending-02-mark-discovery-v2.png"
    },
    {
      title: "\uD3ED\uD48D\uC6B0 \uC18D\uC758 \uC0B4\uC778 \uC900\uBE44",
      lead: "\uACFC\uAC70\uAC00 \uB4DC\uB7EC\uB0A0 \uAC83\uC744 \uC548 \uADF8\uB79C\uD2B8\uB294 \uD3ED\uD48D\uC6B0\uB97C \uC0AC\uACE0\uC758 \uBC30\uACBD\uC73C\uB85C \uC774\uC6A9\uD588\uB2E4.",
      story: "\uADF8\uB79C\uD2B8\uB294 \uBC30\uC804\uC2E4 \uBC14\uB2E5\uC5D0 \uBB3C\uC744 \uBFCC\uB9AC\uACE0, \uBD84\uC7A5\uC2E4\uC5D0\uC11C \uAC00\uC838\uC628 \uBB34\uC0C9 \uC6A9\uC561\uC744 \uC11E\uC5B4 \uBB3C\uC774 \uC804\uAE30\uB97C \uB354 \uC798 \uD1B5\uD558\uAC8C \uB9CC\uB4E4\uC5C8\uB2E4. \uC2A4\uD504\uB808\uC774 \uBCD1\uC5D0 \uB0A8\uC740 \uD558\uC580 \uC794\uB958\uBB3C\uACFC \uBC30\uC804\uC2E4 \uBB3C\uC5D0\uC11C \uBC1C\uACAC\uB41C \uAC19\uC740 \uACC4\uC5F4\uC758 \uBB3C\uC9C8\uC774 \uADF8 \uC900\uBE44\uB97C \uC99D\uBA85\uD55C\uB2E4. \uC816\uC740 \uBC14\uB2E5\uC740 \uBE57\uBB3C\uC774 \uC6B0\uC5F0\uD788 \uC2A4\uBA70\uB4E0 \uAC83\uC774 \uC544\uB2C8\uC5C8\uB2E4. \uB9C8\uD06C\uAC00 \uC804\uAE30\uAC00 \uC0B4\uC544 \uC788\uB294 \uC124\uBE44\uC5D0 \uC811\uADFC\uD558\uBA74 \uAC10\uC804\uB418\uB3C4\uB85D \uB9CC\uB4E0 \uC758\uB3C4\uC801\uC778 \uD568\uC815\uC774\uC5C8\uB2E4.",
      evidence: ["\uBB34\uC0C9 \uC2A4\uD504\uB808\uC774 \uBCD1", "\uD558\uC580 \uC804\uB3C4\uC131 \uC794\uB958\uBB3C", "\uC758\uB3C4\uC801\uC73C\uB85C \uC816\uD78C \uBC14\uB2E5"],
      image: "assets/images/ending-03-trap-preparation-v2.png"
    },
    {
      title: "\uC0AC\uACE0\uB85C \uAFB8\uBBFC \uAC10\uC804 \uC0B4\uC778",
      lead: "\uB9C8\uD06C\uAC00 \uC4F0\uB7EC\uC9C4 \uB4A4, \uADF8\uB79C\uD2B8\uB294 \uCC28\uB2E8\uAE30\uB97C \uB0B4\uB824 \uD3C9\uBC94\uD55C \uC218\uB9AC \uC0AC\uACE0\uCC98\uB7FC \uD604\uC7A5\uC744 \uAFB8\uBA84\uB2E4.",
      story: "\uB9C8\uD06C\uB294 \uBB3C\uC5D0 \uC816\uC740 \uBC30\uC804\uC2E4\uC5D0\uC11C \uC804\uAE30\uAC00 \uC0B4\uC544 \uC788\uB294 \uC124\uBE44\uB97C \uAC74\uB4DC\uB824 \uAC10\uC804\uC0AC\uD588\uB2E4. \uC190\uACFC \uD314\uC758 \uC804\uAE30 \uCDA9\uACA9 \uD754\uC801, \uC190\uC0C1\uB41C \uC7A5\uAC11\uC774 \uC2E4\uC81C \uC0AC\uB9DD \uC6D0\uC778\uC744 \uAC00\uB9AC\uD0A8\uB2E4. \uADF8\uB79C\uD2B8\uB294 \uB9C8\uD06C\uAC00 \uC4F0\uB7EC\uC9C4 \uB4A4\uC5D0\uC57C \uCC28\uB2E8\uAE30\uB97C \uB0B4\uB838\uACE0, \uC816\uC740 \uBC14\uB2E5\uACFC \uC5F4\uB9B0 \uC791\uC5C5 \uAC00\uBC29\uC744 \uADF8\uB300\uB85C \uB0A8\uACA8 \uD3ED\uD48D\uC6B0 \uC18D \uC791\uC5C5 \uC0AC\uACE0\uCC98\uB7FC \uBCF4\uC774\uAC8C \uD588\uB2E4. \uACB0\uAD6D \uADF8\uB79C\uD2B8\uB294 12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4\uC640 \uC228\uACA8 \uB454 \uAE30\uB85D\uC774 \uBC1D\uD600\uC9C0\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uB9C8\uD06C\uB97C \uC0B4\uD574\uD55C \uAC83\uC774\uB2E4.",
      evidence: ["\uC190\uC0C1\uB41C \uC808\uC5F0 \uC7A5\uAC11", "\uC190\uACFC \uD314\uC758 \uC804\uAE30 \uCDA9\uACA9 \uD754\uC801", "\uC0AC\uD6C4\uC5D0 \uB0B4\uB824\uAC04 \uCC28\uB2E8\uAE30"],
      image: "assets/images/ending-04-staged-accident-v2.png"
    }
  ];

  // assets/js/state.js?v=round31
  var PROGRESS_KEY = "markMysteryProgressV1";
  var PROGRESS_VERSION = 1;
  var VALID_PHASES = /* @__PURE__ */ new Set(["CASE_HOME", "CASE_START", "ROUND_INTRO", "IMAGE_REVEAL", "CLUE_SELECT", "CLUE_RESULT", "COMPANION_SELECT", "COMPANION_RESULT", "QUESTION_SELECT", "QUESTION_PENDING", "QUESTION_RESULT", "ROUND_SUMMARY", "FINAL_ANSWER", "ENDING_STORY", "RESULT"]);
  var baseAttempt = () => ({ id: null, status: "not_started", phase: "CASE_HOME", roundNo: 1, clueIds: [], questionCount: 0, totalQuestions: 0, penaltyMs: 0, startedAt: null, completedAt: null, solved: null });
  var emptyFinalDraft = () => ({ victim: "", killer: "", place: "", method: "", motive: "", truth: "" });
  var state = {
    mode: new URLSearchParams(location.search).get("demo") === "1" ? "demo" : "server",
    config: { googleClientId: "", ready: false },
    user: null,
    attempt: baseAttempt(),
    hints: {},
    timeRoomVisits: {},
    questions: [],
    finalDraft: emptyFinalDraft(),
    leader: null,
    popup: null,
    busy: false
  };
  var plainObject = (value) => value && typeof value === "object" && !Array.isArray(value);
  var numberIn = (value, min, max, fallback = 0) => {
    const number = Number(value);
    return Number.isFinite(number) ? Math.min(max, Math.max(min, Math.floor(number))) : fallback;
  };
  var timestamp = (value) => {
    if (Number.isFinite(Number(value))) return Number(value);
    const parsed = Date.parse(value);
    return Number.isNaN(parsed) ? null : parsed;
  };
  var safeHints = (value) => {
    if (!plainObject(value)) return {};
    return Object.fromEntries(Object.entries(value).filter(([key2, hint]) => /^(?:[1-4]|final):[a-z]+$/i.test(key2) && plainObject(hint) && typeof hint.question === "string" && typeof hint.comment === "string").slice(0, 20));
  };
  var safeVisits = (value) => {
    if (!plainObject(value)) return {};
    return Object.fromEntries([1, 2, 3, 4].map((round) => [round, numberIn(value[round], 0, 3, 0)]).filter(([, count]) => count > 0));
  };
  var safeQuestions = (value) => Array.isArray(value) ? value.filter((item) => plainObject(item) && typeof item.text === "string").slice(0, 12).map((item) => ({ roundNo: numberIn(item.roundNo, 1, 4, 1), text: item.text.slice(0, 120), category: typeof item.category === "string" ? item.category : "MAYBE", answerText: typeof item.answerText === "string" ? item.answerText : "" })) : [];
  var safeFinalDraft = (value) => Object.fromEntries(Object.keys(emptyFinalDraft()).map((key2) => [key2, typeof value?.[key2] === "string" ? value[key2].slice(0, 240) : ""]));
  function saveLocalProgress() {
    if (state.mode !== "demo" || state.attempt.status === "not_started") return false;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({ version: PROGRESS_VERSION, caseId: "mark-death-v1", savedAt: Date.now(), user: state.user, attempt: state.attempt, hints: state.hints, timeRoomVisits: state.timeRoomVisits, questions: state.questions, finalDraft: state.finalDraft }));
      return true;
    } catch {
      return false;
    }
  }
  function restoreLocalProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "null");
      if (!plainObject(saved) || saved.version !== PROGRESS_VERSION || saved.caseId !== "mark-death-v1" || !plainObject(saved.attempt)) return false;
      const questions = safeQuestions(saved.questions);
      const roundNo = numberIn(saved.attempt.roundNo, 1, 4, 1);
      const roundQuestionCount = questions.filter((item) => item.roundNo === roundNo).length;
      const phase = VALID_PHASES.has(saved.attempt.phase) ? saved.attempt.phase : "ROUND_INTRO";
      const status = ["in_progress", "completed"].includes(saved.attempt.status) ? saved.attempt.status : "in_progress";
      state.mode = "demo";
      state.user = { displayName: typeof saved.user?.displayName === "string" ? saved.user.displayName.slice(0, 40) : "\uB3C4\uC804 \uD0D0\uC815", demo: true };
      state.attempt = { ...baseAttempt(), id: "demo-mark-v1", status, phase: phase === "QUESTION_PENDING" ? "QUESTION_SELECT" : phase, roundNo, clueIds: Array.isArray(saved.attempt.clueIds) ? [...new Set(saved.attempt.clueIds.filter((id) => typeof id === "string").slice(0, 12))] : [], questionCount: numberIn(saved.attempt.questionCount, roundQuestionCount, 3, roundQuestionCount), totalQuestions: numberIn(saved.attempt.totalQuestions, questions.length, 12, questions.length), penaltyMs: numberIn(saved.attempt.penaltyMs, 0, 864e5, 0), startedAt: timestamp(saved.attempt.startedAt) || Date.now(), completedAt: timestamp(saved.attempt.completedAt), solved: typeof saved.attempt.solved === "boolean" ? saved.attempt.solved : null };
      state.hints = safeHints(saved.hints);
      state.timeRoomVisits = safeVisits(saved.timeRoomVisits);
      state.questions = questions;
      state.finalDraft = safeFinalDraft(saved.finalDraft);
      saveLocalProgress();
      return true;
    } catch {
      return false;
    }
  }
  function clearLocalProgress() {
    try {
      localStorage.removeItem(PROGRESS_KEY);
      return true;
    } catch {
      return false;
    }
  }
  var subscribers = /* @__PURE__ */ new Set();
  function notify() {
    saveLocalProgress();
    subscribers.forEach((fn) => fn(state));
  }
  function patchAttempt(data) {
    Object.assign(state.attempt, data);
    notify();
  }
  function resetDemo() {
    clearLocalProgress();
    state.user = { displayName: "\uB3C4\uC804 \uD0D0\uC815", demo: true };
    state.attempt = { id: "demo-mark-v1", status: "in_progress", phase: "ROUND_INTRO", roundNo: 1, clueIds: [], questionCount: 0, totalQuestions: 0, penaltyMs: 0, startedAt: Date.now(), completedAt: null, solved: null };
    state.hints = {};
    state.timeRoomVisits = {};
    state.questions = [];
    state.finalDraft = emptyFinalDraft();
    state.popup = null;
    notify();
  }

  // assets/js/api.js
  async function request(path, options = {}) {
    const res = await fetch(path, { credentials: "same-origin", headers: { "Content-Type": "application/json", ...options.headers || {} }, ...options });
    const json = await res.json().catch(() => null);
    if (!res.ok || !json?.ok) {
      const err = new Error(json?.error?.message || "\uAE30\uB85D \uBCF4\uAD00\uC2E4\uC758 \uD655\uC778\uC774 \uB2A6\uC5B4\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.");
      err.code = json?.error?.code || `HTTP_${res.status}`;
      throw err;
    }
    return json.data;
  }
  var api = {
    status: () => request("api/auth_status.asp"),
    authGoogle: (credential) => request("api/auth_google.asp", { method: "POST", body: JSON.stringify({ credential }) }),
    start: () => request("api/attempt_start.asp", { method: "POST", body: JSON.stringify({ caseSlug: "mark-last-repair-v1" }) }),
    state: () => request("api/attempt_state.asp?case=mark-last-repair-v1"),
    clue: (payload) => request("api/clue_open.asp", { method: "POST", body: JSON.stringify(payload) }),
    hint: (payload) => request("api/companion_hint.asp", { method: "POST", body: JSON.stringify(payload) }),
    timeRoom: (payload) => request("api/time_room.asp", { method: "POST", body: JSON.stringify(payload) }),
    reserve: (payload) => request("api/question_reserve.asp", { method: "POST", body: JSON.stringify(payload) }),
    commit: (payload) => request("api/question_commit.asp", { method: "POST", body: JSON.stringify(payload) }),
    advance: (payload) => request("api/round_advance.asp", { method: "POST", body: JSON.stringify(payload) }),
    final: (payload) => request("api/final_submit.asp", { method: "POST", body: JSON.stringify(payload) }),
    rankings: () => request("api/rankings.asp?case=mark-last-repair-v1&limit=100")
  };

  // assets/js/popup.js
  var root = () => document.querySelector("#popupRoot");
  var lastFocus = null;
  var keyHandler = null;
  function closePopup() {
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = null;
    root().innerHTML = "";
    document.body.classList.remove("popup-open");
    if (lastFocus) lastFocus.focus?.();
  }
  function openPopup({ kicker = "", title = "", lead = "", body = "", actions = [], dismissible = false, onClose = null }) {
    if (keyHandler) document.removeEventListener("keydown", keyHandler);
    keyHandler = null;
    if (!document.body.classList.contains("popup-open")) lastFocus = document.activeElement;
    document.body.classList.add("popup-open");
    const actionHtml = actions.length ? `<footer class="popup-actions">${actions.map((a, i) => `<button class="button ${a.primary ? "primary" : ""}" type="button" data-popup-action="${i}" ${a.disabled ? "disabled" : ""}>${a.label}</button>`).join("")}</footer>` : "";
    root().innerHTML = `<section class="popup-layer" role="presentation"><div class="popup-mini-timer" aria-label="\uB098\uC758 \uB204\uC801 \uC2DC\uAC04"><button class="popup-mini-home" type="button" aria-label="\uAC8C\uC784 \uBA54\uC778\uD654\uBA74\uC73C\uB85C \uC774\uB3D9"><img src="assets/images/home.svg" alt="" width="15" height="15" aria-hidden="true"></button><span aria-hidden="true">\u23F1</span><b id="popupMiniTime">00:00</b></div><article class="game-popup" role="dialog" aria-modal="true" aria-labelledby="popupTitle"><header class="popup-head">${dismissible ? '<button class="popup-close" type="button" aria-label="\uB2EB\uAE30">\xD7</button>' : ""}<span class="popup-kicker">${kicker}</span><h2 class="popup-title" id="popupTitle" tabindex="-1">${title}</h2>${lead ? `<p class="popup-lead">${lead}</p>` : ""}</header><div class="popup-body">${body}</div>${actionHtml}</article></section>`;
    const layer = root().querySelector(".popup-layer");
    const popup = root().querySelector(".game-popup");
    const close = () => {
      closePopup();
      onClose?.();
    };
    root().querySelector(".popup-mini-home")?.addEventListener("click", () => {
      closePopup();
      document.querySelector("#caseDashboard")?.scrollIntoView({ block: "start" });
    });
    root().querySelectorAll("[data-popup-action]").forEach((btn) => btn.onclick = () => actions[Number(btn.dataset.popupAction)]?.onClick?.());
    root().querySelector(".popup-close")?.addEventListener("click", close);
    layer.addEventListener("click", (e) => {
      if (dismissible && e.target === layer) close();
    });
    keyHandler = (e) => {
      if (e.key === "Escape" && dismissible) {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = [...popup.querySelectorAll('button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", keyHandler);
    popup.scrollTop = 0;
    popup.querySelector(".popup-body").scrollTop = 0;
    (popup.querySelector("[data-popup-action]:not([disabled])") || popup.querySelector("button:not([disabled]),input") || popup.querySelector("#popupTitle"))?.focus();
  }
  function setPopupBusy(value, message = "\uC0AC\uAC74 \uAE30\uB85D\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026") {
    const popup = root().querySelector(".game-popup");
    if (!popup) return;
    popup.querySelector(".popup-busy")?.remove();
    if (value) popup.insertAdjacentHTML("beforeend", `<div class="popup-busy" role="status"><span class="busy-spinner"></span><b>${message}</b></div>`);
    popup.querySelectorAll("button,input").forEach((el) => {
      if (value) {
        el.dataset.wasDisabled = el.disabled ? "1" : "0";
        el.disabled = true;
      } else {
        el.disabled = el.dataset.wasDisabled === "1";
        delete el.dataset.wasDisabled;
      }
    });
  }

  // assets/js/puter-ai.js?v=round41
  var fixed = ["\uB124, \uADF8\uB807\uC2B5\uB2C8\uB2E4.", "\uC544\uB2C8\uC694, \uADF8\uB807\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", "\uADF8\uB7F4 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.", "\uC911\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."];
  var AI_MODELS = ["gpt-5.4-nano", "gpt-5-nano"];
  var AI_REQUEST_TIMEOUT_MS = 1e4;
  var COMPANION_TOTAL_TIMEOUT_MS = 2e4;
  var FINAL_AI_REQUEST_TIMEOUT_MS = 13e3;
  var FINAL_COMPANION_TOTAL_TIMEOUT_MS = 32e3;
  var companionIds = COMPANIONS.map((c) => c.id);
  var companionNames = COMPANIONS.map((c) => c.name);
  var persona = {
    hyeseon: "\uCC28\uBD84\uD558\uAC8C \uB208\uC55E\uC758 \uB2E8\uC11C\uB97C \uC815\uB9AC\uD558\uACE0 \uC11C\uB85C \uC774\uC5B4\uC9C8 \uC218 \uC788\uB294 \uB9E5\uB77D\uC744 \uD55C \uB2E8\uACC4\uC529 \uD655\uC778\uD55C\uB2E4.",
    jinho: "\uD655\uC2E0\uC744 \uC11C\uB450\uB974\uC9C0 \uC54A\uACE0 \uC0AC\uB9DD \uC6D0\uC778\uACFC \uAC00\uB2A5\uC131\uC744 \uC870\uC2EC\uC2A4\uB7FD\uAC8C \uC881\uD78C\uB2E4.",
    chulgu: "\uAC00\uC7A5 \uC774\uC0C1\uD55C \uD604\uC7A5 \uC694\uC18C\uB97C \uAC70\uCE68\uC5C6\uACE0 \uC9E7\uAC8C \uBC14\uB85C \uBB3B\uB294\uB2E4.",
    sangmin: "\uACBD\uD5D8 \uB9CE\uC740 \uC804\uB7B5\uAC00\uCC98\uB7FC \uC9C8\uBB38 \uBE44\uC6A9 \uB300\uBE44 \uD6A8\uC728\uC774 \uB192\uC740 \uC21C\uC11C\uB97C \uAC15\uC870\uD55C\uB2E4."
  };
  var futureTerms = {
    1: ["\uC7A5\uAC11", "\uC77C\uC815\uD45C", "\uC5F4\uC1E0", "\uBCF4\uAD00\uD568", "\uC2A4\uD504\uB808\uC774", "\uC794\uB958\uBB3C", "\uACB0\uC815", "\uD2F0\uCF13", "\uC2E0\uBB38", "\uAE08\uD654", "\uC808\uB3C4", "\uADF8\uB79C\uD2B8", "\uB0A1\uC740 \uC0AC\uC9C4", "\uC7A5\uBD80", "12\uB144"],
    2: ["\uC2A4\uD504\uB808\uC774", "\uC794\uB958\uBB3C", "\uACB0\uC815", "\uD2F0\uCF13", "\uC2E0\uBB38", "\uAE08\uD654", "\uC808\uB3C4", "\uADF8\uB79C\uD2B8", "\uB0A1\uC740 \uC0AC\uC9C4", "\uC7A5\uBD80", "12\uB144"],
    3: ["\uC2E0\uBB38", "\uAE08\uD654", "\uC808\uB3C4", "\uADF8\uB79C\uD2B8", "\uB0A1\uC740 \uC0AC\uC9C4", "\uC7A5\uBD80", "12\uB144"],
    4: []
  };
  var visibleTerms = {
    1: ["\uB9C8\uD06C", "\uBC30\uC804\uC2E4", "\uD3D0\uADF9\uC7A5", "\uD3ED\uD48D\uC6B0", "\uBC14\uB2E5", "\uBB3C", "\uCC28\uB2E8\uAE30", "\uC791\uC5C5\uAC00\uBC29", "\uC804\uAE30", "\uC0AC\uB9DD", "\uC8FD\uC74C", "\uC0AC\uAC74", "\uC6D0\uC778"],
    2: ["\uB9C8\uD06C", "\uBC30\uC804\uC2E4", "\uC791\uC5C5\uAC00\uBC29", "\uC7A5\uAC11", "\uC77C\uC815\uD45C", "\uAD6C\uC5ED", "\uC5F4\uC1E0", "\uBCF4\uAD00\uD568", "\uC791\uC5C5", "\uC0AC\uB9DD", "\uC8FD\uC74C", "\uC0AC\uAC74", "\uC6D0\uC778"],
    3: ["\uB9C8\uD06C", "\uBC30\uC804\uC2E4", "\uBD84\uC7A5\uC2E4", "\uC2A4\uD504\uB808\uC774", "\uD654\uC7A5\uB300", "\uC794\uB958\uBB3C", "\uACB0\uC815", "\uD2F0\uCF13", "\uBB3C\uAC74", "\uC0AC\uB9DD", "\uC8FD\uC74C", "\uC0AC\uAC74", "\uC6D0\uC778"],
    4: ["\uB9C8\uD06C", "\uADF8\uB79C\uD2B8", "\uC2E0\uBB38", "\uAE08\uD654", "\uC808\uB3C4", "\uC7A5\uBD80", "\uC0AC\uC9C4", "\uACFC\uAC70", "\uAE30\uB85D", "12\uB144", "\uC0AC\uB9DD", "\uC8FD\uC74C", "\uC0AC\uAC74", "\uC6D0\uC778"]
  };
  var ready = null;
  async function ensurePuter() {
    if (window.puter?.ai) return true;
    if (location.protocol === "file:") return false;
    if (ready) {
      const loaded2 = await ready;
      if (loaded2 && window.puter?.ai) return true;
      ready = null;
    }
    ready = new Promise((resolve) => {
      document.querySelector("script[data-puter-game]")?.remove();
      const s = document.createElement("script");
      let settled = false;
      const finish = (value) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(value);
      };
      const timer = setTimeout(() => finish(false), 12e3);
      s.src = `https://js.puter.com/v2/?game=${Date.now()}`;
      s.dataset.puterGame = "1";
      s.onload = () => finish(!!window.puter?.ai);
      s.onerror = () => finish(false);
      document.head.append(s);
    });
    const loaded = await ready;
    if (!loaded) ready = null;
    return loaded;
  }
  function resultText(result) {
    if (typeof result === "string") return result;
    const content = result?.message?.content;
    if (typeof content === "string") return content;
    if (Array.isArray(content)) return content.map((v) => typeof v === "string" ? v : v?.text || v?.content || "").join("");
    if (typeof content?.text === "string") return content.text;
    if (typeof result?.text === "string") return result.text;
    return String(result || "");
  }
  var finalProposalFields = ["victim", "killer", "place", "method", "motive", "truth"];
  var finalProposalLabels = { victim: "\uD53C\uD574\uC790", killer: "\uAC00\uD574\uC790", place: "\uC7A5\uC18C", method: "\uC0AC\uB9DD \uC6D0\uC778", motive: "\uB3D9\uAE30", truth: "\uC228\uACA8\uC9C4 \uC9C4\uC2E4" };
  var finalProposalAliases = {
    victim: ["victim", "\uD53C\uD574\uC790"],
    killer: ["killer", "culprit", "suspect", "\uAC00\uD574\uC790", "\uBC94\uC778", "\uC6A9\uC758\uC790"],
    place: ["place", "location", "\uC7A5\uC18C", "\uC0AC\uAC74 \uC7A5\uC18C"],
    method: ["method", "cause", "causeOfDeath", "\uC0AC\uB9DD \uC6D0\uC778", "\uC0AC\uB9DD\uC6D0\uC778", "\uBC29\uBC95"],
    motive: ["motive", "\uB3D9\uAE30"],
    truth: ["truth", "hiddenTruth", "\uC228\uACA8\uC9C4 \uC9C4\uC2E4", "\uC228\uACA8\uC9C4\uC9C4\uC2E4", "\uC228\uACA8\uC9C4 \uC0AC\uC2E4"]
  };
  var finalAsciiLabels = { victim: "VICTIM", killer: "KILLER", place: "PLACE", method: "METHOD", motive: "MOTIVE", truth: "TRUTH", comment: "COMMENT" };
  function parseJsonValue(value) {
    if (typeof value !== "string") return value;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  function normalizedProposalValue(value) {
    value = parseJsonValue(value);
    if (typeof value === "string") return value.trim();
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (Array.isArray(value)) {
      const parts = value.map(normalizedProposalValue).filter(Boolean);
      return parts.join(", ").trim();
    }
    if (value && typeof value === "object") {
      for (const key2 of ["value", "name", "text", "answer", "guess", "proposal", "content"]) {
        const normalized = normalizedProposalValue(value[key2]);
        if (normalized) return normalized;
      }
    }
    return "";
  }
  function proposalScore(value) {
    value = parseJsonValue(value);
    if (Array.isArray(value)) {
      return value.reduce((score, item) => {
        const label = item?.field ?? item?.key ?? item?.label;
        return score + (finalProposalFields.some((field) => finalProposalAliases[field].includes(label)) ? 1 : 0);
      }, 0);
    }
    if (!value || typeof value !== "object") return 0;
    return finalProposalFields.reduce((score, field) => {
      const alias = finalProposalAliases[field].find((key2) => value[key2] !== void 0);
      return score + (alias ? 1 : 0);
    }, 0);
  }
  function findProposalSource(value, depth = 0, seen = /* @__PURE__ */ new Set()) {
    value = parseJsonValue(value);
    if (!value || typeof value !== "object" || depth > 5 || seen.has(value)) return null;
    seen.add(value);
    let best = { value, score: proposalScore(value) };
    const preferred = ["proposal", "result", "data", "arguments", "args", "input", "output", "finalProposal", "final_proposal", "answer", "payload", "response"];
    const children = Array.isArray(value) ? value : Object.entries(value).sort(([a], [b]) => Number(preferred.includes(b)) - Number(preferred.includes(a))).map(([, child]) => child);
    for (const child of children) {
      const found = findProposalSource(child, depth + 1, seen);
      if (found && found.score > best.score) best = found;
    }
    return best;
  }
  function findComment(value, depth = 0, seen = /* @__PURE__ */ new Set()) {
    value = parseJsonValue(value);
    if (!value || typeof value !== "object" || depth > 5 || seen.has(value)) return "";
    seen.add(value);
    for (const key2 of ["comment", "summary", "opinion", "\uC885\uD569 \uC758\uACAC", "\uC885\uD569\uC758\uACAC"]) {
      const comment = normalizedProposalValue(value[key2]);
      if (comment) return comment;
    }
    for (const child of Array.isArray(value) ? value : Object.values(value)) {
      const comment = findComment(child, depth + 1, seen);
      if (comment) return comment;
    }
    return "";
  }
  function asciiProposalSection(text, label) {
    const all = Object.values(finalAsciiLabels).join("|");
    const match = text.match(new RegExp(`(?:\\*\\*)?${label}(?:\\*\\*)?\\s*(?:::|\\|\\|\\||[:\uFF1A])\\s*([\\s\\S]*?)(?=\\s*(?:[-*\u2022]\\s*)?(?:\\*\\*)?(?:${all})(?:\\*\\*)?\\s*(?:::|\\|\\|\\||[:\uFF1A])|$)`, "i"));
    return match?.[1]?.replace(/\*\*\s*$/, "").trim() || "";
  }
  function finalProposalOutput(result) {
    const text = resultText(result).trim();
    let parsed = null;
    const toolCall = result?.message?.tool_calls?.find((call) => call?.function?.name === "submit_final_proposal") || result?.tool_calls?.find((call) => call?.function?.name === "submit_final_proposal");
    const contentTool = [...Array.isArray(result?.message?.content) ? result.message.content : [], ...Array.isArray(result?.content) ? result.content : []].find((item) => (item?.name === "submit_final_proposal" || item?.function?.name === "submit_final_proposal") && (item?.input !== void 0 || item?.arguments !== void 0 || item?.function?.arguments !== void 0));
    const toolArguments = toolCall?.function?.arguments ?? toolCall?.arguments ?? toolCall?.input ?? contentTool?.input ?? contentTool?.arguments ?? contentTool?.function?.arguments;
    if (toolArguments !== void 0) parsed = parseJsonValue(toolArguments);
    const json = text.match(/\{[\s\S]*\}/)?.[0];
    if (!parsed && json) {
      try {
        parsed = JSON.parse(json);
      } catch {
      }
    }
    if (!parsed && !text) return null;
    const found = findProposalSource(parsed);
    const source = found?.value ?? parsed;
    const proposal = {};
    for (const field of finalProposalFields) {
      const aliases = finalProposalAliases[field];
      const alias = aliases.find((key2) => source?.[key2] !== void 0);
      if (alias) proposal[field] = normalizedProposalValue(source[alias]);
      if (!proposal[field] && Array.isArray(source)) {
        const item = source.find((entry) => aliases.includes(entry?.field) || aliases.includes(entry?.key) || aliases.includes(entry?.label));
        const value = item?.value ?? item?.answer ?? item?.text;
        proposal[field] = normalizedProposalValue(value);
      }
    }
    if (finalProposalFields.some((field) => !proposal[field])) {
      const plain = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
      for (const field of finalProposalFields) {
        if (proposal[field]) continue;
        proposal[field] = asciiProposalSection(plain, finalAsciiLabels[field]);
        if (proposal[field]) continue;
        const labels = finalProposalAliases[field].filter((label) => /[가-힣]/.test(label));
        for (const label of labels) {
          const flexible = label.replace(/\s+/g, "\\s*");
          const match = plain.match(new RegExp(`(?:^|\\n)\\s*(?:[-*\u2022]|\\d+[.)])?\\s*${flexible}\\s*[:\uFF1A-]\\s*([^\\n]+)`));
          if (match) {
            proposal[field] = match[1].trim();
            break;
          }
        }
      }
    }
    let comment = findComment(parsed);
    if (!comment) comment = asciiProposalSection(text, finalAsciiLabels.comment);
    if (!comment) {
      const match = text.match(/(?:종합\s*의견|최종\s*의견|의견)\s*[:：]\s*([^\n]+(?:\n(?!\s*(?:피해자|가해자|장소|사망\s*원인|동기|숨겨진\s*진실)\s*[:：])[\s\S]*)?)/);
      if (match) comment = match[1].replace(/\s*```$/, "").trim();
    }
    if (!comment && finalProposalFields.every((field) => proposal[field])) {
      comment = `${proposal.victim} \uC0AC\uAC74\uC740 ${proposal.place}\uC758 \uACF5\uAC1C \uB2E8\uC11C\uC640 ${proposal.method} \uAC00\uB2A5\uC131\uC744 \uC911\uC2EC\uC73C\uB85C, ${proposal.motive}\uC640 ${proposal.truth}\uC758 \uC5F0\uACB0\uC744 \uD655\uC778\uD574 \uBCF4\uC790.`;
    }
    return { comment, proposal };
  }
  async function puterChat(messages, options = {}, timeoutMs = AI_REQUEST_TIMEOUT_MS) {
    const deadline = Date.now() + timeoutMs;
    let lastError;
    for (const model of AI_MODELS) {
      let timer;
      const remaining = deadline - Date.now();
      if (remaining < 500) {
        const error = new Error("AI response timeout");
        error.code = "PUTER_TIMEOUT";
        throw error;
      }
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => {
          const error = new Error("AI response timeout");
          error.code = "PUTER_TIMEOUT";
          reject(error);
        }, remaining);
      });
      try {
        return await Promise.race([window.puter.ai.chat(messages, { reasoning_effort: "minimal", verbosity: "low", ...options, model }), timeout]);
      } catch (error) {
        if (error?.code === "PUTER_TIMEOUT") throw error;
        lastError = error;
      } finally {
        clearTimeout(timer);
      }
    }
    throw lastError || new Error("AI provider unavailable");
  }
  function publicBrief(roundNo, extraFacts = [], questionFacts = [], revealedClueIds = null) {
    const overview = CASE_OVERVIEW;
    const clueSet = Array.isArray(revealedClueIds) ? new Set(revealedClueIds) : null;
    const revealed = ROUNDS.slice(0, roundNo).map((round) => {
      const clues = round.clues.filter((clue) => !clueSet || clueSet.has(clue.id));
      return clues.length ? `ROUND ${round.no} ${round.title}: ${clues.map((c) => `${c.title} - ${c.text}`).join(" / ")}` : "";
    }).filter(Boolean).join("\n");
    const timeRoom = extraFacts.length ? `
\uC2DC\uAC04\uC758 \uBC29\uC5D0\uC11C \uCD94\uAC00\uB85C \uACF5\uAC1C\uB41C \uC815\uBCF4:
- ${extraFacts.join("\n- ")}` : "";
    const questions = questionFacts.length ? `
\uD50C\uB808\uC774\uC5B4\uAC00 \uC9D1\uC0AC\uC5D0\uAC8C \uC9C1\uC811 \uC9C8\uBB38\uD574 \uC5BB\uC740 \uD655\uC815 \uB2F5\uBCC0:
${questionFacts.map((item) => `- ROUND ${item.roundNo} \uC9C8\uBB38: ${item.text} / \uC9D1\uC0AC\uC758 \uB2F5: ${item.answer}`).join("\n")}` : "";
    return `${overview}
${revealed}${timeRoom}${questions}`;
  }
  function companionHintIssue(hint, roundNo, companionId, requiredTerms = [], questionTerms = [], allowedContext = "") {
    if (!hint || typeof hint.question !== "string" || typeof hint.comment !== "string") return "question\uACFC comment\uAC00 \uC788\uB294 JSON \uD615\uC2DD\uC774 \uC544\uB2C8\uB2E4.";
    const question = hint.question.trim(), comment = hint.comment.trim(), combined = `${question} ${comment}`;
    if (!question.endsWith("?")) return "\uC9C8\uBB38\uC774 \uBB3C\uC74C\uD45C\uB85C \uB05D\uB098\uC9C0 \uC54A\uC558\uB2E4.";
    if (question.length < 6 || question.length > 120) return "\uC9C8\uBB38 \uAE38\uC774\uAC00 \uBC94\uC704\uB97C \uBC97\uC5B4\uB0AC\uB2E4.";
    if (comment.length < 2 || comment.length > 180) return "\uC758\uACAC \uAE38\uC774\uAC00 \uBC94\uC704\uB97C \uBC97\uC5B4\uB0AC\uB2E4.";
    if (/<[^>]+>|```|\{\s*"|역할|페르소나|시스템|프롬프트/i.test(combined)) return "\uAC8C\uC784 \uBC16\uC758 \uD615\uC2DD\uC774\uB098 \uB0B4\uBD80 \uC9C0\uC2DC\uB97C \uD3EC\uD568\uD588\uB2E4.";
    if (/집사님?|호스트|진행자|선생님/.test(combined) || /당신/.test(question)) return "\uC9D1\uC0AC\uB97C \uC0AC\uAC74 \uC778\uBB3C\uCC98\uB7FC \uC5B8\uAE09\uD588\uB2E4.";
    if (companionIds.some((id) => new RegExp(`\\b${id}\\b`, "i").test(combined))) return "\uB0B4\uBD80 \uC601\uBB38 ID\uB97C \uD3EC\uD568\uD588\uB2E4.";
    if (companionNames.some((name) => question.includes(name))) return "\uB3D9\uB8CC \uC774\uB984\uC744 \uC0AC\uAC74 \uC778\uBB3C\uCC98\uB7FC \uC5B8\uAE09\uD588\uB2E4.";
    if (/정답은|범인은|가해자는|살인자는|죽인 사람은/.test(comment)) return "\uACF5\uAC1C \uC804 \uC815\uB2F5\uC744 \uC758\uACAC\uC5D0\uC11C \uB2E8\uC815\uD588\uB2E4.";
    if (/또는|혹은|그리고|이거나/.test(question)) return "\uD55C \uC9C8\uBB38\uC5D0 \uB450 \uAC00\uC9C0 \uAC00\uC124\uC744 \uD569\uCCE4\uB2E4.";
    const blocked = (futureTerms[roundNo] || []).find((term) => combined.includes(term) && !allowedContext.includes(term));
    if (blocked) return `\uC544\uC9C1 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC740 '${blocked}' \uC815\uBCF4\uB97C \uC0C8\uB85C \uB9CC\uB4E4\uC5C8\uB2E4.`;
    if (!(visibleTerms[roundNo] || []).some((term) => combined.includes(term)) && !/(현장|흔적|피해자|사망|죽음|사고)/.test(combined)) return "\uD604\uC7AC \uACF5\uAC1C \uB2E8\uC11C\uC640 \uC5F0\uACB0\uB418\uB294 \uD45C\uD604\uC774 \uC5C6\uB2E4.";
    if (requiredTerms.length && !requiredTerms.some((term) => combined.includes(term))) return `\uCD5C\uC2E0 \uC2DC\uAC04\uC758 \uBC29 \uC815\uBCF4 \uD575\uC2EC\uC5B4(${requiredTerms.join(", ")})\uB97C \uBC18\uC601\uD558\uC9C0 \uC54A\uC558\uB2E4.`;
    if (questionTerms.length && !questionTerms.some((term) => combined.includes(term))) return `\uAC00\uC7A5 \uCD5C\uADFC \uC9D1\uC0AC \uBB38\uB2F5\uC758 \uD575\uC2EC\uC5B4(${questionTerms.join(", ")})\uB97C \uBC18\uC601\uD558\uC9C0 \uC54A\uC558\uB2E4.`;
    if (!COMPANIONS.some((c) => c.id === companionId)) return "\uB3D9\uB8CC \uC815\uBCF4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uB2E4.";
    return "";
  }
  function isValidCompanionHint(hint, roundNo, companionId, requiredTerms = [], questionTerms = [], allowedContext = "") {
    return companionHintIssue(hint, roundNo, companionId, requiredTerms, questionTerms, allowedContext) === "";
  }
  async function companionHint(roundNo, companionId, roomContext = { facts: [], currentFacts: [], requiredTerms: [], questionFacts: [], latestQuestion: null, allowedContext: "" }) {
    const companion = COMPANIONS.find((c) => c.id === companionId);
    if (!companion) throw new Error("\uB3D9\uB8CC \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
    if (!await ensurePuter() || !window.puter?.ai) throw new Error("\uB3D9\uB8CC\uAC00 \uC7A0\uC2DC \uC0DD\uAC01\uC744 \uC815\uB9AC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4 \uC8FC\uC138\uC694.");
    const facts = Array.isArray(roomContext?.facts) ? roomContext.facts : [];
    const currentFacts = Array.isArray(roomContext?.currentFacts) ? roomContext.currentFacts : [];
    const requiredTerms = Array.isArray(roomContext?.requiredTerms) ? roomContext.requiredTerms : [];
    const questionFacts = Array.isArray(roomContext?.questionFacts) ? roomContext.questionFacts : [];
    const allowedContext = typeof roomContext?.allowedContext === "string" ? roomContext.allowedContext : [...facts, ...questionFacts.flatMap((item) => [item.text, item.answer])].join(" ");
    const latestQuestion = roomContext?.latestQuestion && typeof roomContext.latestQuestion.text === "string" ? roomContext.latestQuestion : null;
    const questionTerms = latestQuestion ? (visibleTerms[roundNo] || []).filter((term) => latestQuestion.text.includes(term)) : [];
    const latestRoomFact = currentFacts.at(-1) || "";
    const roomRule = latestRoomFact ? `\uD50C\uB808\uC774\uC5B4\uAC00 \uC2DC\uAC04\uC758 \uBC29\uC5D0\uC11C \uC9C1\uC811 \uC5BB\uC5B4 \uB108\uC5D0\uAC8C \uACF5\uC720\uD55C \uCD5C\uC2E0 \uC815\uBCF4\uB294 \uB2E4\uC74C\uACFC \uAC19\uB2E4: "${latestRoomFact}"
\uC774 \uC815\uBCF4\uB97C \uC808\uB300 \uBB34\uC2DC\uD558\uC9C0 \uB9D0\uACE0, \uC9C8\uBB38\uC774\uB098 \uC9E7\uC740 \uC758\uACAC\uC5D0\uC11C \uD575\uC2EC \uB300\uC0C1\uC774\uB098 \uC758\uBBF8\uB97C \uC9C1\uC811 \uC5B8\uAE09\uD574 \uC774\uBC88 \uC758\uACAC\uC758 \uC911\uC2EC \uADFC\uAC70\uB85C \uC0AC\uC6A9\uD55C\uB2E4.` : "\uD50C\uB808\uC774\uC5B4\uAC00 \uC774\uBC88 \uB77C\uC6B4\uB4DC \uC2DC\uAC04\uC758 \uBC29\uC5D0\uC11C \uACF5\uC720\uD55C \uCD94\uAC00 \uC815\uBCF4\uB294 \uC544\uC9C1 \uC5C6\uB2E4.";
    const questionRule = latestQuestion ? `\uD50C\uB808\uC774\uC5B4\uAC00 \uAC00\uC7A5 \uCD5C\uADFC \uC9D1\uC0AC\uC5D0\uAC8C \uBB3C\uC740 \uC9C8\uBB38\uC740 "${latestQuestion.text}"\uC774\uACE0, \uC9D1\uC0AC\uC758 \uD655\uC815 \uB2F5\uBCC0\uC740 "${latestQuestion.answer}"\uC774\uB2E4. \uC774 \uC9C8\uBB38\uACFC \uB2F5\uC744 \uC808\uB300 \uBB34\uC2DC\uD558\uAC70\uB098 \uBC18\uB300\uB85C \uD574\uC11D\uD558\uC9C0 \uB9D0\uACE0, \uADF8 \uACB0\uACFC\uB85C \uC774\uBBF8 \uD655\uC778\uB418\uAC70\uB098 \uBC30\uC81C\uB41C \uB0B4\uC6A9\uC744 \uC9E7\uC740 \uC758\uACAC\uC5D0 \uC5B8\uAE09\uD55C \uB4A4 \uB2E4\uC74C \uC9C8\uBB38\uC744 \uC81C\uC548\uD55C\uB2E4.` : "\uC544\uC9C1 \uC9D1\uC0AC\uC5D0\uAC8C\uC11C \uC5BB\uC740 \uC9C8\uBB38 \uACB0\uACFC\uB294 \uC5C6\uB2E4.";
    const system = `\uB108\uB294 \uBE44\uACF5\uC2DD \uD32C\uBA54\uC774\uB4DC \uCD94\uB9AC \uAC8C\uC784\uC758 \uB3D9\uB8CC \uC870\uB825\uC790 '${companion.name}'\uB2E4.
\uAC8C\uC784\uC6A9 \uC131\uACA9: ${persona[companionId]}
ROUND 1\uBD80\uD130 ROUND 4\uAE4C\uC9C0 \uBAA8\uB4E0 \uB3D9\uB8CC \uC758\uACAC\uC740 \uBC18\uB4DC\uC2DC \uB124\uAC00 \uC9C1\uC811 \uC0DD\uC131\uD55C\uB2E4. \uBBF8\uB9AC \uC791\uC131\uB41C \uACE0\uC815 \uC9C8\uBB38\uC774\uB098 \uB300\uCCB4 \uBB38\uAD6C\uB294 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4.
\uC544\uB798 \uACF5\uAC1C \uC815\uBCF4 \uC548\uC5D0\uC11C\uB9CC \uB9D0\uD55C\uB2E4. \uACF5\uAC1C \uC815\uBCF4\uC5D0 \uC5C6\uB294 \uC778\uBB3C, \uACFC\uAC70 \uC0AC\uAC74, \uBC94\uC778, \uC815\uB2F5\uC744 \uCD94\uCE21\uD558\uAC70\uB098 \uC0C8\uB85C \uB9CC\uB4E4\uC9C0 \uC54A\uB294\uB2E4.
${roomRule}
${questionRule}
\uB3D9\uB8CC \uC790\uC2E0\uC774\uB098 \uB2E4\uB978 \uB3D9\uB8CC\uB97C \uBC94\uC778\uC73C\uB85C \uC9C0\uBAA9\uD558\uC9C0 \uC54A\uB294\uB2E4. \uB0B4\uBD80 \uC601\uBB38 ID\uB97C \uC808\uB300 \uCD9C\uB825\uD558\uC9C0 \uC54A\uB294\uB2E4.
\uC9D1\uC0AC\uB294 \uC0AC\uAC74 \uC778\uBB3C\uC774 \uC544\uB2C8\uB77C \uB2F5\uBCC0\uB9CC \uD310\uC815\uD558\uB294 \uAC8C\uC784 \uD638\uC2A4\uD2B8\uB2E4. \uC9D1\uC0AC\uAC00 \uC0AC\uAC74 \uBB3C\uAC74\uC744 \uAD00\uB9AC\uD558\uAC70\uB098 \uBB38\uC744 \uC5F4\uC5C8\uAC70\uB098 \uC0AC\uAC74\uC5D0 \uAD00\uC5EC\uD588\uB2E4\uACE0 \uAC00\uC815\uD558\uC9C0 \uC54A\uB294\uB2E4.
\uC9C8\uBB38 \uBB38\uC7A5\uC5D0 '\uC9D1\uC0AC', '\uC9D1\uC0AC\uB2D8', '\uB2F9\uC2E0' \uAC19\uC740 \uD638\uCE6D\uC744 \uB123\uC9C0 \uB9D0\uACE0 \uC0AC\uAC74\uC758 \uC0AC\uC2E4 \uC790\uCCB4\uB9CC \uBB3B\uB294\uB2E4.
\uD55C \uBB38\uC7A5\uC5D0\uB294 \uBC18\uB4DC\uC2DC \uD55C \uAC00\uC9C0 \uC0AC\uC2E4\uB9CC \uB2F4\uACE0 '\uB610\uB294', '\uD639\uC740', '\uADF8\uB9AC\uACE0'\uB85C \uB450 \uAC00\uC124\uC744 \uD569\uCE58\uC9C0 \uC54A\uB294\uB2E4.
\uAC8C\uC784 \uD638\uC2A4\uD2B8\uC5D0\uAC8C \uC785\uB825\uD560 \uC218 \uC788\uB294 \uC608/\uC544\uB2C8\uC694\uD615 \uC9C8\uBB38 \uD558\uB098\uB97C \uC81C\uC548\uD55C\uB2E4.
JSON\uB9CC \uCD9C\uB825\uD55C\uB2E4: {"question":"\uC9C8\uBB38 \uD55C \uBB38\uC7A5?","comment":"\uC131\uACA9\uC774 \uB4DC\uB7EC\uB098\uB294 \uC9E7\uC740 \uC81C\uC548"}`;
    let lastIssue = "", timedOut = false, providerFailed = false;
    const deadline = Date.now() + COMPANION_TOTAL_TIMEOUT_MS;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const remaining = deadline - Date.now();
        if (remaining < 1500) {
          timedOut = true;
          break;
        }
        const retryRule = attempt === 0 ? "" : `\uC774\uC804 \uCD9C\uB825\uC740 \uB2E4\uC74C \uC774\uC720\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5C8\uB2E4: ${lastIssue || "\uACF5\uAC1C \uC815\uBCF4 \uB610\uB294 \uD615\uC2DD \uADDC\uCE59 \uBD88\uC77C\uCE58"} \uBC18\uB4DC\uC2DC \uC774 \uBB38\uC81C\uB97C \uACE0\uCCD0 \uC644\uC804\uD788 \uC0C8\uB85C \uC791\uC131\uD55C\uB2E4. \uC2DC\uAC04\uC758 \uBC29 \uD575\uC2EC\uC5B4 \uC911 \uD558\uB098(${requiredTerms.join(", ") || "\uC5C6\uC74C"})\uC640 \uCD5C\uADFC \uC9D1\uC0AC \uBB38\uB2F5 \uD575\uC2EC\uC5B4 \uC911 \uD558\uB098(${questionTerms.join(", ") || "\uC5C6\uC74C"})\uB97C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uBC18\uC601\uD55C\uB2E4.`;
        const response = await puterChat([{ role: "system", content: system }, { role: "user", content: `\uD604\uC7AC ROUND ${roundNo}\uAE4C\uC9C0 \uD50C\uB808\uC774\uC5B4\uC5D0\uAC8C \uACF5\uAC1C\uB41C \uC815\uBCF4:
${publicBrief(roundNo, facts, questionFacts)}
${retryRule}
\uBC18\uB4DC\uC2DC \uBB3C\uC74C\uD45C\uB85C \uB05D\uB098\uB294 \uC9C8\uBB38 \uD55C \uBB38\uC7A5\uACFC \uC9E7\uC740 \uC758\uACAC\uC744 JSON \uD558\uB098\uB85C\uB9CC \uB2F5\uD55C\uB2E4.` }], { temperature: 0.25, max_tokens: 180 }, Math.min(AI_REQUEST_TIMEOUT_MS, remaining));
        const raw = resultText(response).match(/\{[\s\S]*\}/)?.[0];
        const output = raw ? JSON.parse(raw) : null;
        const enforceExactContext = attempt < 2;
        lastIssue = companionHintIssue(output, roundNo, companionId, enforceExactContext ? requiredTerms : [], enforceExactContext ? questionTerms : [], allowedContext);
        if (!lastIssue) return { question: output.question.trim(), comment: output.comment.trim(), source: "puter", timeRoomFactCount: currentFacts.length, questionFactCount: questionFacts.length };
      } catch (error2) {
        if (error2?.code === "PUTER_TIMEOUT") {
          timedOut = true;
          break;
        }
        if (error2 instanceof SyntaxError) {
          lastIssue = "JSON \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC558\uB2E4.";
          continue;
        }
        providerFailed = true;
        break;
      }
    }
    const error = new Error(timedOut ? "\uB3D9\uB8CC\uC758 \uC758\uACAC \uC815\uB9AC\uAC00 \uB108\uBB34 \uAE38\uC5B4\uC838 \uC774\uBC88 \uC694\uCCAD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4." : providerFailed ? "\uB3D9\uB8CC\uC640 \uC5F0\uACB0\uC774 \uC7A0\uC2DC \uB04A\uACBC\uC2B5\uB2C8\uB2E4." : "\uB3D9\uB8CC\uC758 \uC0DD\uAC01\uC774 \uC544\uC9C1 \uC815\uB9AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4 \uC8FC\uC138\uC694.");
    error.code = timedOut ? "PUTER_TIMEOUT" : providerFailed ? "PUTER_UNAVAILABLE" : "PUTER_INVALID_RESPONSE";
    throw error;
  }
  function finalOpinionIssue(opinion, companionId, publicContext = "") {
    if (!opinion || typeof opinion.comment !== "string") return "comment\uAC00 \uC788\uB294 JSON \uD615\uC2DD\uC774 \uC544\uB2C8\uB2E4.";
    if (!opinion.proposal || typeof opinion.proposal !== "object") return "\uCD5C\uC885 \uBC1C\uC758 6\uAC1C \uD56D\uBAA9\uC774 \uC5C6\uB2E4.";
    for (const field of finalProposalFields) {
      const value = opinion.proposal[field];
      if (typeof value !== "string" || value.trim().length < 2 || value.trim().length > 220) return `${finalProposalLabels[field]} \uD56D\uBAA9\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uB2E4.`;
      if (/특정\s*(?:하기\s*)?어려움|알\s*수\s*없|판단\s*(?:불가|어려움)|불명|모름/.test(value)) return `${finalProposalLabels[field]} \uD56D\uBAA9\uC5D0 \uC2E4\uC81C \uCD94\uCC9C\uC774 \uC5C6\uB2E4.`;
    }
    const comment = opinion.comment.trim();
    const combined = [comment, ...finalProposalFields.map((field) => opinion.proposal[field])].join(" ");
    if (comment.length < 18 || comment.length > 500) return "\uCD5C\uC885 \uC758\uACAC \uAE38\uC774\uAC00 \uBC94\uC704\uB97C \uBC97\uC5B4\uB0AC\uB2E4.";
    if (/<[^>]+>|```|\{\s*"|역할|페르소나|시스템|프롬프트|Puter|AI/i.test(combined)) return "\uAC8C\uC784 \uBC16\uC758 \uD615\uC2DD\uC774\uB098 \uB0B4\uBD80 \uC9C0\uC2DC\uB97C \uD3EC\uD568\uD588\uB2E4.";
    const benignHostReferences = /(?:집사(?:님)?(?:의|에게|한테서|로부터)?\s*)?(?:질문(?:을)?\s*(?:통해|해서|하여|해)\s*)?(?:얻은|받은|확인한|확정된)?\s*(?:집사\s*)?(?:답변|판정|문답|응답|대답|확인\s*기록)/g;
    const hostRemainder = combined.replace(benignHostReferences, " \uD655\uC778\uB41C \uBB38\uB2F5 \uAE30\uB85D ");
    if (/집사님?|호스트|진행자/.test(hostRemainder)) return "\uAC8C\uC784 \uD638\uC2A4\uD2B8\uB97C \uC0AC\uAC74 \uC778\uBB3C\uCC98\uB7FC \uC5B8\uAE09\uD588\uB2E4.";
    if (companionIds.some((id) => new RegExp(`\\b${id}\\b`, "i").test(combined))) return "\uB0B4\uBD80 \uC601\uBB38 ID\uB97C \uD3EC\uD568\uD588\uB2E4.";
    if (!COMPANIONS.some((c) => c.id === companionId)) return "\uB3D9\uB8CC \uC815\uBCF4\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uB2E4.";
    const anchors = [.../* @__PURE__ */ new Set([...Object.values(visibleTerms).flat(), "\uD53C\uD574\uC790", "\uAC00\uD574\uC790", "\uD604\uC7A5", "\uB2E8\uC11C", "\uD754\uC801", "\uAC10\uC804"])].filter((term) => !publicContext || publicContext.includes(term));
    if (!anchors.some((term) => combined.includes(term))) return "\uACF5\uAC1C \uB2E8\uC11C\uC758 \uD575\uC2EC\uC5B4\uAC00 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC558\uB2E4.";
    const invented = ["\uCD1D", "\uAD8C\uCD1D", "\uCE7C", "\uD749\uAE30", "\uB3C5\uADF9\uBB3C", "\uC57D\uBB3C", "\uAD50\uC0B4", "\uCD94\uB77D", "\uD3ED\uBC1C", "\uD654\uC7AC", "\uCD1D\uC0C1", "\uC790\uC0C1", "\uBAA9\uACA9\uC790", "\uACBD\uCC30", "\uD615\uC0AC"].find((term) => combined.includes(term) && !publicContext.includes(term));
    if (invented) return `\uACF5\uAC1C \uAE30\uB85D\uC5D0 \uC5C6\uB294 '${invented}' \uC815\uBCF4\uB97C \uC0C8\uB85C \uB9CC\uB4E4\uC5C8\uB2E4.`;
    return "";
  }
  function isValidFinalCompanionOpinion(opinion, companionId, publicContext = "") {
    return finalOpinionIssue(opinion, companionId, publicContext) === "";
  }
  async function finalCompanionOpinion(companionId, roomContext = { facts: [], questionFacts: [], clueIds: [] }) {
    const companion = COMPANIONS.find((c) => c.id === companionId);
    if (!companion) throw new Error("\uB3D9\uB8CC \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
    if (!await ensurePuter() || !window.puter?.ai) {
      const error2 = new Error("\uB3D9\uB8CC\uC640 \uC7A0\uC2DC \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4 \uC8FC\uC138\uC694.");
      error2.code = "PUTER_UNAVAILABLE";
      throw error2;
    }
    const facts = Array.isArray(roomContext?.facts) ? roomContext.facts : [];
    const questionFacts = Array.isArray(roomContext?.questionFacts) ? roomContext.questionFacts : [];
    const clueIds = Array.isArray(roomContext?.clueIds) ? roomContext.clueIds : [];
    const publicContext = publicBrief(4, facts, questionFacts, clueIds);
    const system = `\uB108\uB294 \uBE44\uACF5\uC2DD \uD32C\uBA54\uC774\uB4DC \uCD94\uB9AC \uAC8C\uC784\uC5D0\uC11C \uCD5C\uC885 \uBC1C\uC758\uB97C \uC55E\uB454 \uB3D9\uB8CC \uC870\uB825\uC790 '${companion.name}'\uB2E4.
\uAC8C\uC784\uC6A9 \uC131\uACA9: ${persona[companionId]}
\uC81C\uACF5\uB41C \uACF5\uAC1C \uAE30\uB85D\uB9CC \uADFC\uAC70\uB85C \uCD5C\uC885 \uCD94\uB9AC \uC758\uACAC\uC744 \uB9D0\uD55C\uB2E4. \uAE30\uB85D\uC5D0 \uC5C6\uB294 \uC778\uBB3C, \uBB3C\uAC74, \uD589\uB3D9, \uACFC\uAC70 \uC0AC\uAC74\uC744 \uC0C8\uB85C \uB9CC\uB4E4\uC9C0 \uC54A\uB294\uB2E4.
\uD53C\uD574\uC790, \uAC00\uD574\uC790, \uC7A5\uC18C, \uC0AC\uB9DD \uC6D0\uC778, \uB3D9\uAE30, \uC228\uACA8\uC9C4 \uC9C4\uC2E4\uC744 \uAC01\uAC01 \uC81C\uC548\uD558\uACE0, \uC5EC\uC12F \uD56D\uBAA9\uC744 \uC5F0\uACB0\uD55C \uC885\uD569 \uC758\uACAC\uC744 1~3\uBB38\uC7A5\uC73C\uB85C \uB9D0\uD55C\uB2E4.
\uD655\uC815\uB418\uC9C0 \uC54A\uC740 \uD56D\uBAA9\uB3C4 \uACF5\uAC1C \uB2E8\uC11C\uC5D0\uC11C \uAC00\uC7A5 \uAC00\uB2A5\uC131 \uB192\uC740 \uAC00\uC124 \uD558\uB098\uB97C \uCD94\uCC9C\uD55C\uB2E4. \uB2E8\uC815\uD558\uC9C0 \uB9D0\uACE0 '\uAC00\uB2A5\uC131\uC774 \uB192\uB2E4', '\uC758\uC2EC\uB41C\uB2E4'\uCC98\uB7FC \uAC00\uC124\uC784\uC744 \uBC1D\uD78C\uB2E4.
\uC5B4\uB5A4 \uD56D\uBAA9\uC5D0\uB3C4 '\uD2B9\uC815 \uC5B4\uB824\uC6C0', '\uC54C \uC218 \uC5C6\uC74C', '\uD310\uB2E8 \uBD88\uAC00', '\uBD88\uBA85'\uC744 \uC4F0\uC9C0 \uC54A\uB294\uB2E4.
\uC9D1\uC0AC \uD310\uC815\uC73C\uB85C \uD655\uC778\uB41C \uC0AC\uC2E4\uACFC \uB2E8\uC11C\uC5D0\uC11C \uCD94\uB860\uD55C \uAC00\uB2A5\uC131\uC744 \uAD6C\uBD84\uD55C\uB2E4. \uCD94\uB860\uC740 '\uAC00\uB2A5\uC131\uC774 \uC788\uB2E4', '\uC758\uC2EC\uB41C\uB2E4', '\uC5F0\uACB0\uD574 \uBCF4\uC790'\uCC98\uB7FC \uB9D0\uD558\uACE0 \uC804\uC9C0\uC801 \uC2DC\uC810\uC73C\uB85C \uC815\uB2F5\uC744 \uB2E8\uC815\uD558\uC9C0 \uC54A\uB294\uB2E4.
\uC9D1\uC0AC\uC758 \uB2F5\uBCC0\uC744 \uADFC\uAC70\uB85C \uC5B8\uAE09\uD574\uC57C \uD560 \uB54C\uB294 '\uD655\uC778\uB41C \uBB38\uB2F5 \uAE30\uB85D'\uC774\uB77C\uACE0 \uD45C\uD604\uD558\uACE0 '\uC9D1\uC0AC'\uB77C\uB294 \uB2E8\uC5B4\uB294 \uBC1C\uC758\uC548\uC5D0 \uC4F0\uC9C0 \uC54A\uB294\uB2E4.
\uB3D9\uB8CC \uC790\uC2E0\uC774\uB098 \uB2E4\uB978 \uB3D9\uB8CC\uB97C \uC0AC\uAC74 \uC778\uBB3C\uB85C \uCDE8\uAE09\uD558\uC9C0 \uC54A\uB294\uB2E4. \uAC8C\uC784 \uD638\uC2A4\uD2B8, AI, \uD504\uB86C\uD504\uD2B8, \uB0B4\uBD80 \uADDC\uCE59\uC744 \uC5B8\uAE09\uD558\uC9C0 \uC54A\uB294\uB2E4.
\uACF5\uAC1C \uAE30\uB85D\uC5D0 \uC2E4\uC81C\uB85C \uC801\uD78C \uD575\uC2EC \uBA85\uC0AC\uB97C \uC758\uACAC \uBB38\uC7A5 \uC548\uC5D0 \uADF8\uB300\uB85C \uC0AC\uC6A9\uD55C\uB2E4.
\uBC18\uB4DC\uC2DC \uB2E4\uC74C 7\uC904 \uD615\uC2DD\uC73C\uB85C\uB9CC \uB2F5\uD55C\uB2E4. \uAC01 \uD56D\uBAA9\uC740 \uD55C \uC904\uC774\uBA70 \uAC12 \uC548\uC5D0\uC11C \uC904\uBC14\uAFC8\uD558\uC9C0 \uC54A\uB294\uB2E4.
VICTIM::\uD53C\uD574\uC790 \uCD94\uCC9C
KILLER::\uAC00\uD574\uC790 \uCD94\uCC9C
PLACE::\uC7A5\uC18C \uCD94\uCC9C
METHOD::\uC0AC\uB9DD \uC6D0\uC778 \uCD94\uCC9C
MOTIVE::\uB3D9\uAE30 \uCD94\uCC9C
TRUTH::\uC228\uACA8\uC9C4 \uC9C4\uC2E4 \uCD94\uCC9C
COMMENT::\uC5EC\uC12F \uD56D\uBAA9\uC744 \uC5F0\uACB0\uD55C \uC885\uD569 \uC758\uACAC`;
    let lastIssue = "", timedOut = false, providerFailed = false;
    const deadline = Date.now() + FINAL_COMPANION_TOTAL_TIMEOUT_MS;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const remaining = deadline - Date.now();
        if (remaining < 1500) {
          timedOut = true;
          break;
        }
        const retryRule = attempt === 0 ? "" : attempt === 1 ? `\uC774\uC804 \uC758\uACAC\uC740 \uB2E4\uC74C \uC774\uC720\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5C8\uB2E4: ${lastIssue || "\uACF5\uAC1C \uC815\uBCF4 \uB610\uB294 \uD615\uC2DD \uADDC\uCE59 \uBD88\uC77C\uCE58"} VICTIM\uBD80\uD130 COMMENT\uAE4C\uC9C0 7\uC904\uC744 \uBAA8\uB450 \uCC44\uC6CC \uB2E4\uC2DC \uCD94\uCC9C\uD55C\uB2E4.` : `\uB9C8\uC9C0\uB9C9 \uC7AC\uC791\uC131\uC774\uB2E4. \uACF5\uAC1C \uB2E8\uC11C\uB9CC \uC774\uC6A9\uD574 \uAC00\uC7A5 \uAC00\uB2A5\uC131 \uB192\uC740 \uAC00\uC124 \uD558\uB098\uB97C \uAC01 \uD56D\uBAA9\uC5D0 \uBC18\uB4DC\uC2DC \uCD94\uCC9C\uD55C\uB2E4. \uBBF8\uD655\uC815\xB7\uBD88\uBA85\xB7\uD2B9\uC815 \uC5B4\uB824\uC6C0 \uAC19\uC740 \uD68C\uD53C \uB2F5\uBCC0\uC740 \uAE08\uC9C0\uD55C\uB2E4.`;
        const response = await puterChat([{ role: "system", content: system }, { role: "user", content: `\uCD5C\uC885 \uBC1C\uC758 \uC804\uC5D0 \uC9C0\uAE08\uAE4C\uC9C0 \uC2E4\uC81C\uB85C \uACF5\uAC1C\uB41C \uAE30\uB85D\uC740 \uC544\uB798 \uB0B4\uC6A9\uC774 \uC804\uBD80\uB2E4. \uC774 \uAE30\uB85D \uBC16\uC758 \uC0AC\uC2E4\uC740 \uC808\uB300 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4.

${publicContext}

${retryRule}
\uC9C0\uC815\uB41C VICTIM:: \uD615\uC2DD\uBD80\uD130 COMMENT:: \uD615\uC2DD\uAE4C\uC9C0 \uC815\uD655\uD788 7\uC904\uB85C \uB2F5\uD55C\uB2E4.` }], { temperature: 0.15, max_tokens: 420 }, Math.min(FINAL_AI_REQUEST_TIMEOUT_MS, remaining));
        const output = finalProposalOutput(response);
        lastIssue = finalOpinionIssue(output, companionId, publicContext);
        if (!lastIssue) return { comment: output.comment.trim(), proposal: output.proposal, source: "puter", timeRoomFactCount: facts.length, questionFactCount: questionFacts.length };
      } catch (error2) {
        if (error2?.code === "PUTER_TIMEOUT") {
          timedOut = true;
          break;
        }
        providerFailed = true;
        break;
      }
    }
    const error = new Error(timedOut ? "\uB3D9\uB8CC\uC758 \uCD5C\uC885 \uC758\uACAC \uC815\uB9AC\uAC00 \uB108\uBB34 \uAE38\uC5B4\uC838 \uC774\uBC88 \uC694\uCCAD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4." : providerFailed ? "\uB3D9\uB8CC\uC640 \uC5F0\uACB0\uC774 \uC7A0\uC2DC \uB04A\uACBC\uC2B5\uB2C8\uB2E4." : "\uB3D9\uB8CC\uC758 \uCD5C\uC885 \uC758\uACAC\uC774 \uC544\uC9C1 \uC815\uB9AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
    error.code = timedOut ? "PUTER_TIMEOUT" : providerFailed ? "PUTER_UNAVAILABLE" : "PUTER_INVALID_RESPONSE";
    error.reason = lastIssue;
    throw error;
  }
  var caseFacts = `
[\uB4F1\uC7A5\uC778\uBB3C\uACFC \uC5ED\uD560]
- \uD53C\uD574\uC790\uB294 \uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C \uB9AC\uB2E4.
- \uADF8\uB79C\uD2B8\uB294 \uC8FD\uC740 \uC0AC\uB78C\uC774 \uC544\uB2C8\uB77C \uB9C8\uD06C\uB97C \uC8FD\uC778 \uAC00\uD574\uC790\uB2E4.
- \uCD5C\uC608\uC120, \uCF69\uC9C4\uD638, \uB0A8\uCD9C\uAD6C, \uC774\uC131\uBBFC\uC740 \uD50C\uB808\uC774\uC5B4\uC758 \uAC00\uC0C1 \uB3D9\uB8CC\uC774\uBA70 \uC0AC\uAC74\uC758 \uBC94\uC778\uC774\uB098 \uAC00\uD574\uC790\uAC00 \uC544\uB2C8\uB2E4.
- \uC9D1\uC0AC\uB294 \uC0AC\uAC74 \uC138\uACC4\uC758 \uC778\uBB3C\uC774 \uC544\uB2C8\uB2E4. \uC9D1\uC0AC\uB294 \uD50C\uB808\uC774\uC5B4\uC758 \uC9C8\uBB38\uC744 \uD310\uC815\uD558\uB294 \uAC8C\uC784 \uD638\uC2A4\uD2B8\uC77C \uBFD0\uC774\uBA70 \uBB38\uC744 \uC5F4\uAC70\uB098 \uBB3C\uAC74\uC744 \uAD00\uB9AC\uD558\uAC70\uB098 \uC0AC\uAC74\uC5D0 \uAD00\uC5EC\uD558\uC9C0 \uC54A\uC558\uB2E4.

[\uC0AC\uAC74\uC758 \uD655\uC815 \uC0AC\uC2E4]
- \uB9C8\uD06C\uB294 \uC9C8\uC2DD, \uC790\uC0B4, \uC790\uC5F0\uC0AC, \uB2E8\uC21C \uC791\uC5C5 \uC0AC\uACE0\uB85C \uC8FD\uC9C0 \uC54A\uC558\uB2E4.
- \uB9C8\uD06C\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC740 \uAC10\uC804\uC774\uB2E4.
- \uB9C8\uD06C\uB294 \uC218\uB9AC \uC911 \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uACFC 12\uB144 \uC804 \uADF9\uC7A5 \uAE08\uD654 \uC808\uB3C4 \uC0AC\uAC74\uC758 \uAE30\uB85D\uC744 \uBC1C\uACAC\uD588\uB2E4.
- \uADF8\uB79C\uD2B8\uB294 \uACFC\uAC70 \uC808\uB3C4 \uAE30\uB85D\uC774 \uB4DC\uB7EC\uB098\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574 \uB9C8\uD06C\uB97C \uC8FD\uC600\uB2E4.
- \uADF8\uB79C\uD2B8\uB294 \uC816\uC740 \uBC14\uB2E5\uACFC \uC804\uAE30 \uC124\uBE44\uB97C \uC774\uC6A9\uD574 \uAC10\uC804 \uC0AC\uACE0\uCC98\uB7FC \uBCF4\uC774\uB3C4\uB85D \uD604\uC7A5\uC744 \uC704\uC7A5\uD588\uB2E4.
- 12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4 \uC0AC\uAC74\uACFC \uC228\uACA8\uC9C4 \uAE30\uB85D\uC740 \uD604\uC7AC \uC0AC\uAC74\uC758 \uB3D9\uAE30\uC640 \uC9C1\uC811 \uAD00\uB828 \uC788\uB2E4.
- \uBC14\uB2E5\uC758 \uBB3C\uACFC \uB0B4\uB824\uAC04 \uCC28\uB2E8\uAE30\uB294 \uB2E8\uC21C\uD788 \uD3ED\uD48D\uC6B0 \uB54C\uBB38\uC5D0 \uC0DD\uAE34 \uC6B0\uC5F0\uD55C \uD754\uC801\uC774 \uC544\uB2C8\uB2E4.

[ROUND 1 \uD604\uC7A5 \uC138\uBD80 \uC0AC\uC2E4]
- \uBC30\uC804\uC2E4 \uBC14\uB2E5\uC758 \uBB3C\uC740 \uD3ED\uD48D\uC6B0\uB85C \uC6B0\uC5F0\uD788 \uB4E4\uC5B4\uC628 \uBE57\uBB3C\uB9CC\uC774 \uC544\uB2C8\uB2E4. \uADF8\uB79C\uD2B8\uAC00 \uAC10\uC804 \uD658\uACBD\uC744 \uB9CC\uB4E4\uAE30 \uC704\uD574 \uC758\uB3C4\uC801\uC73C\uB85C \uB354\uD55C \uBB3C\uC774\uB2E4.
- \uB9C8\uD06C\uC758 \uC190\uACFC \uD314\uC5D0\uB294 \uC804\uAE30 \uCDA9\uACA9\uACFC \uC77C\uCE58\uD558\uB294 \uD754\uC801\uC774 \uC788\uB2E4. \uC774 \uD754\uC801\uC740 \uB9C8\uD06C\uC758 \uAC10\uC804 \uC0AC\uB9DD\uACFC \uC9C1\uC811 \uAD00\uB828 \uC788\uB2E4.
- \uCC28\uB2E8\uAE30\uB294 \uB9C8\uD06C\uAC00 \uAC10\uC804\uB418\uC5B4 \uC4F0\uB7EC\uC9C4 \uB4A4 \uADF8\uB79C\uD2B8\uAC00 \uD604\uC7A5\uC744 \uC0AC\uACE0\uCC98\uB7FC \uAFB8\uBBF8\uB294 \uACFC\uC815\uC5D0\uC11C \uB0B4\uB838\uB2E4.
- \uBC1C\uACAC \uB2F9\uC2DC \uCC28\uB2E8\uAE30\uAC00 \uB0B4\uB824\uAC00 \uC788\uC5C8\uB2E4\uACE0 \uD574\uC11C \uB9C8\uD06C\uAC00 \uAC10\uC804\uB420 \uB2F9\uC2DC\uC5D0\uB3C4 \uC804\uAE30\uAC00 \uB04A\uACA8 \uC788\uC5C8\uB358 \uAC83\uC740 \uC544\uB2C8\uB2E4.
- \uC5F4\uB824 \uC788\uB358 \uC791\uC5C5\uAC00\uBC29\uC740 \uB9C8\uD06C\uAC00 \uC608\uC0C1\uD558\uC9C0 \uBABB\uD55C \uAE30\uB85D\uACFC \uBCF4\uAD00\uD568\uC744 \uBC1C\uACAC\uD55C \uC77C\uACFC \uAD00\uB828 \uC788\uB2E4.

[ROUND 2 \uC791\uC5C5 \uD754\uC801 \uC138\uBD80 \uC0AC\uC2E4]
- \uC190\uC0C1\uB41C \uC7A5\uAC11\uC740 \uB9C8\uD06C\uAC00 \uC804\uAE30 \uCDA9\uACA9\uC744 \uBC1B\uC744 \uB2F9\uC2DC \uC0DD\uAE34 \uD754\uC801\uC774\uBA70 \uC0AC\uB9DD\uACFC \uAD00\uB828 \uC788\uB2E4.
- \uB9C8\uD06C\uAC00 \uC608\uC815\uC5D0 \uC5C6\uB358 \uAD6C\uC5ED\uC744 \uD655\uC778\uD55C \uAC83\uC740 \uC624\uB798\uB41C \uBCF4\uAD00 \uACF5\uAC04\uACFC \uC228\uACA8\uC9C4 \uAE30\uB85D\uC744 \uBC1C\uACAC\uD55C \uC77C\uACFC \uAD00\uB828 \uC788\uB2E4.
- \uB0A1\uC740 \uC5F4\uC1E0\uB294 \uC77C\uBC18 \uCD9C\uC785\uBB38\uC774 \uC544\uB2C8\uB77C \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uC744 \uC5EC\uB294 \uB370 \uC4F0\uC600\uB2E4.
- \uC791\uC5C5\uAC00\uBC29\uC758 \uBA54\uBAA8\uB294 \uB9C8\uD06C\uAC00 \uC608\uC815\uB41C \uC218\uB9AC \uC678\uC5D0 \uC624\uB798\uB41C \uBCF4\uAD00\uD568\uC744 \uC870\uC0AC\uD558\uB824 \uD588\uC74C\uC744 \uBCF4\uC5EC\uC900\uB2E4.

[ROUND 3 \uBD84\uC7A5\uC2E4 \uC138\uBD80 \uC0AC\uC2E4]
- \uB77C\uBCA8 \uC5C6\uB294 \uC2A4\uD504\uB808\uC774 \uBCD1\uC5D0\uB294 \uBB3C\uC5D0 \uC11E\uC5B4 \uC804\uAE30\uAC00 \uB354 \uC798 \uD750\uB974\uAC8C \uB9CC\uB4DC\uB294 \uC6A9\uC561\uC774 \uB4E4\uC5B4 \uC788\uC5C8\uB2E4.
- \uD558\uC580 \uC794\uB958\uBB3C\uC740 \uBB3C\uC5D0 \uB179\uB294 \uC804\uB3C4\uC131 \uC131\uBD84\uC774\uBA70 \uC0AC\uAC74\uACFC \uC9C1\uC811 \uAD00\uB828 \uC788\uB2E4.
- \uBC30\uC804\uC2E4 \uBC14\uB2E5\uC758 \uBB3C\uC5D0\uC11C\uB294 \uBD84\uC7A5\uC2E4\uC758 \uD558\uC580 \uC794\uB958\uBB3C\uACFC \uAC19\uC740 \uACC4\uC5F4\uC758 \uC131\uBD84\uC774 \uAC80\uCD9C\uB410\uB2E4.
- \uC2A4\uD504\uB808\uC774 \uBCD1\uACFC \uC794\uB958\uBB3C\uC740 \uADF8\uB79C\uD2B8\uAC00 \uAC10\uC804 \uD658\uACBD\uC744 \uC900\uBE44\uD558\uB294 \uB370 \uC0AC\uC6A9\uD55C \uD754\uC801\uC774\uB2E4.
- \uCC22\uAE34 \uC624\uB798\uB41C \uD2F0\uCF13\uC740 12\uB144 \uC804 \uADF9\uC7A5 \uC0AC\uAC74\uC758 \uC2DC\uAE30\uC640 \uC5F0\uACB0\uB418\uBA70 \uD604\uC7AC \uC0AC\uAC74\uC758 \uACFC\uAC70 \uBC30\uACBD\uC744 \uCC3E\uB294 \uB2E8\uC11C\uB2E4.

[ROUND 4 \uACFC\uAC70 \uAE30\uB85D \uC138\uBD80 \uC0AC\uC2E4]
- 12\uB144 \uC804 \uC2E0\uBB38\uC740 \uADF9\uC7A5 \uAE08\uD654 \uC808\uB3C4 \uC0AC\uAC74\uC744 \uB2E4\uB8E8\uBA70 \uD604\uC7AC \uC0B4\uC778\uC758 \uB3D9\uAE30\uC640 \uC9C1\uC811 \uAD00\uB828 \uC788\uB2E4.
- \uAE08\uD654 \uBAA9\uB85D\uACFC \uC7A5\uBD80\uB294 \uADF8\uB79C\uD2B8\uAC00 \uC0AC\uB77C\uC9C4 \uAE08\uD654\uC758 \uD589\uBC29\uACFC \uACFC\uAC70 \uC808\uB3C4 \uAE30\uB85D\uC744 \uC54C\uACE0 \uC788\uC5C8\uC74C\uC744 \uBCF4\uC5EC\uC900\uB2E4.
- \uB0A1\uC740 \uC0AC\uC9C4 \uC18D \uB450 \uC0AC\uB78C\uC740 \uB9C8\uD06C\uC640 \uADF8\uB79C\uD2B8\uC774\uBA70, \uB450 \uC0AC\uB78C\uC740 12\uB144 \uC804\uBD80\uD130 \uC11C\uB85C \uC54C\uACE0 \uC788\uC5C8\uB2E4.
- \uB9C8\uD06C\uAC00 \uBC1C\uACAC\uD55C \uAE30\uB85D\uC740 \uADF8\uB79C\uD2B8\uC758 \uACFC\uAC70 \uC808\uB3C4\uB97C \uB4DC\uB7EC\uB0BC \uC218 \uC788\uC5C8\uACE0, \uC774\uAC83\uC774 \uADF8\uB79C\uD2B8\uAC00 \uB9C8\uD06C\uB97C \uC8FD\uC778 \uC774\uC720\uB2E4.
`;
  async function requestJudgeCategory(system, user, attempts = 2) {
    for (let attempt = 0; attempt < attempts; attempt++) {
      try {
        const response = await puterChat([{ role: "system", content: system }, { role: "user", content: user }], { temperature: 0, max_tokens: 24 });
        const raw = resultText(response).trim();
        const json = raw.match(/\{[\s\S]*\}/)?.[0];
        const category = json ? String(JSON.parse(json).category || "").toUpperCase() : raw.toUpperCase().replace(/[^A-Z]/g, "");
        if (["YES", "NO", "MAYBE", "IRRELEVANT"].includes(category)) return category;
      } catch (error) {
        if (error?.code === "PUTER_TIMEOUT") return null;
      }
    }
    return null;
  }
  async function judgeQuestion(question, roundNo = 1) {
    if (!await ensurePuter() || !window.puter?.ai) throw new Error("\uC9D1\uC0AC\uAC00 \uC0AC\uAC74 \uAE30\uB85D\uC744 \uD655\uC778\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC2DC\uAC04\uC740 \uB298\uC5B4\uB098\uC9C0 \uC54A\uC558\uC73C\uB2C8 \uB2E4\uC2DC \uC9C8\uBB38\uD574 \uC8FC\uC138\uC694.");
    const system = `\uB108\uB294 \uCD94\uB9AC \uAC8C\uC784\uC758 \uD310\uC815 \uC804\uC6A9 \uC9D1\uC0AC AI\uB2E4. \uC544\uB798 \uD655\uC815 \uC0AC\uC2E4\uB9CC\uC744 \uADFC\uAC70\uB85C \uC0AC\uC6A9\uC790\uC758 \uC9C8\uBB38\uC744 \uD310\uC815\uD55C\uB2E4.
${caseFacts}
[\uD310\uC815 \uADDC\uCE59]
1. \uC9C8\uBB38 \uBB38\uC7A5\uC758 \uC8FC\uC5B4, \uBAA9\uC801\uC5B4, \uC870\uC0AC(\uAC00/\uC774/\uB97C/\uC740/\uB294)\uB97C \uC815\uD655\uD788 \uAD6C\uBD84\uD55C\uB2E4. \uC8FC\uC5B4\uC640 \uBAA9\uC801\uC5B4\uB97C \uB4A4\uBC14\uAFB8\uAC70\uB098 \uC0DD\uB7B5\uB41C \uC778\uBB3C\uC744 \uC784\uC758\uB85C \uB9CC\uB4E4\uC9C0 \uC54A\uB294\uB2E4.
2. '\uB108', '\uB124\uAC00', '\uB2F9\uC2E0', '\uC9D1\uC0AC', '\uC9D1\uC0AC\uB2D8'\uC740 \uBAA8\uB450 \uAC8C\uC784 \uD638\uC2A4\uD2B8\uC778 \uC9D1\uC0AC\uB97C \uAC00\uB9AC\uD0A8\uB2E4. \uC9D1\uC0AC\uB294 \uC0AC\uAC74 \uC778\uBB3C\uC774 \uC544\uB2C8\uBBC0\uB85C \uC9D1\uC0AC\uAC00 \uC0B4\uC778\xB7\uC808\uB3C4\xB7\uBB38 \uAC1C\uBC29\xB7\uBB3C\uAC74 \uAD00\uB9AC\xB7\uC0AC\uAC74 \uAD00\uC5EC\uB97C \uD588\uB294\uC9C0 \uBB3B\uB294 \uC9C8\uBB38\uC740 IRRELEVANT\uC774\uB2E4.
3. \uC8FC\uC5B4\uAC00 \uC0DD\uB7B5\uB41C \uCC44 '\uC8FD\uC600\uB098\uC694?', '\uC5F4\uC5B4\uC92C\uB098\uC694?'\uCC98\uB7FC \uC0C1\uB300\uC5D0\uAC8C \uD589\uB3D9\uC744 \uBB3B\uB294 \uBB38\uC7A5\uB3C4 \uC9D1\uC0AC\uC5D0\uAC8C \uBB3B\uB294 \uAC83\uC73C\uB85C \uBCF4\uACE0 IRRELEVANT\uB85C \uD310\uC815\uD55C\uB2E4.
4. \uADF8\uB79C\uD2B8\uB294 \uC8FD\uC9C0 \uC54A\uC558\uB2E4. \uADF8\uB79C\uD2B8\uAC00 \uB9C8\uD06C\uB97C \uC8FD\uC600\uB2E4. \uB9C8\uD06C\uAC00 \uADF8\uB79C\uD2B8\uB97C \uC8FD\uC778 \uAC83\uC774 \uC544\uB2C8\uB2E4.
5. \uC9C8\uBB38\uC758 \uBAA8\uB4E0 \uB0B4\uC6A9\uC774 \uD655\uC815 \uC0AC\uC2E4\uACFC \uC77C\uCE58\uD558\uBA74 YES\uB2E4.
6. \uC9C8\uBB38\uC758 \uBAA8\uB4E0 \uB0B4\uC6A9\uC774 \uD655\uC815 \uC0AC\uC2E4\uACFC \uBC18\uB300\uBA74 NO\uB2E4.
7. \uBCF5\uD569 \uC9C8\uBB38\uC5D0\uC11C \uC77C\uBD80\uB9CC \uB9DE\uAC70\uB098, \uB300\uBA85\uC0AC\uC758 \uB300\uC0C1\uC774 \uBD88\uBD84\uBA85\uD558\uAC70\uB098, \uC0AC\uC2E4\uB9CC\uC73C\uB85C \uD655\uC815\uD560 \uC218 \uC5C6\uC73C\uBA74 MAYBE\uB2E4.
8. \uC0AC\uAC74 \uD574\uACB0\uACFC \uBB34\uAD00\uD55C \uC9C8\uBB38\uC774\uB098 \uC9D1\uC0AC \uC790\uC2E0\uC744 \uC0AC\uAC74 \uC778\uBB3C\uB85C \uC804\uC81C\uD55C \uC9C8\uBB38\uC740 IRRELEVANT\uC774\uB2E4.
9. \uACF5\uAC1C \uB77C\uC6B4\uB4DC\uC640 \uAD00\uACC4\uC5C6\uC774 \uC704 \uD655\uC815 \uC0AC\uC2E4\uC744 \uAE30\uC900\uC73C\uB85C \uC9C4\uC2E4\uD558\uAC8C \uB2F5\uD55C\uB2E4.
10. MAYBE\uB294 \uAE30\uBCF8 \uB2F5\uBCC0\uC774 \uC544\uB2C8\uB2E4. \uC9C8\uBB38\uC758 \uC8FC\uC5B4\uC640 \uB300\uC0C1\uC774 \uBD84\uBA85\uD558\uACE0 \uC704 \uC0AC\uC2E4\uD45C\uB85C \uCC38\xB7\uAC70\uC9D3\uC744 \uACB0\uC815\uD560 \uC218 \uC788\uC73C\uBA74 \uBC18\uB4DC\uC2DC YES \uB610\uB294 NO\uB85C \uB2F5\uD55C\uB2E4.
11. \uC9C8\uBB38\uC774 \uC0AC\uC2E4\uD45C\uC640 \uAC19\uC740 \uC758\uBBF8\uB97C \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uB2E4\uB978 \uD45C\uD604\uC73C\uB85C \uBB3C\uC5B4\uB3C4 \uB17C\uB9AC\uC801\uC73C\uB85C \uAC19\uC740 \uC0AC\uC2E4\uC774\uBA74 YES \uB610\uB294 NO\uB85C \uD310\uC815\uD55C\uB2E4.

[\uD310\uC815 \uC608\uC2DC]
- '\uB124\uAC00 \uADF8\uB79C\uD2B8\uB97C \uC8FD\uC600\uB098\uC694?' => IRRELEVANT
- '\uC9D1\uC0AC\uB2D8\uC774 \uB9C8\uD06C\uB97C \uC8FD\uC600\uB098\uC694?' => IRRELEVANT
- '\uADF8\uB79C\uD2B8\uAC00 \uC8FD\uC5C8\uB098\uC694?' => NO
- '\uB9C8\uD06C\uAC00 \uADF8\uB79C\uD2B8\uB97C \uC8FD\uC600\uB098\uC694?' => NO
- '\uADF8\uB79C\uD2B8\uAC00 \uB9C8\uD06C\uB97C \uC8FD\uC600\uB098\uC694?' => YES
- '\uB9C8\uD06C\uB294 \uC9C8\uC2DD\uC0AC\uD588\uB098\uC694?' => NO
- '\uB9C8\uD06C\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC740 \uAC10\uC804\uC778\uAC00\uC694?' => YES
- '\uBC14\uB2E5\uC758 \uBB3C\uC740 \uC0AC\uAC74\uACFC \uAD00\uB828 \uC788\uB098\uC694?' => YES
- '\uBC14\uB2E5\uC758 \uBB3C\uC740 \uD3ED\uD48D\uC6B0 \uB54C\uBB38\uC5D0 \uC6B0\uC5F0\uD788 \uC0DD\uACBC\uB098\uC694?' => NO
- '\uCC28\uB2E8\uAE30\uB294 \uB9C8\uD06C\uAC00 \uC4F0\uB7EC\uC9C4 \uB4A4 \uB0B4\uB824\uAC14\uB098\uC694?' => YES
- '\uC190\uC0C1\uB41C \uC7A5\uAC11\uC740 \uB9C8\uD06C\uC758 \uC8FD\uC74C\uACFC \uAD00\uB828 \uC788\uB098\uC694?' => YES
- '\uB0A1\uC740 \uC5F4\uC1E0\uB294 \uBCF4\uAD00\uD568\uC744 \uC5EC\uB294 \uB370 \uC4F0\uC600\uB098\uC694?' => YES
- '\uD558\uC580 \uC794\uB958\uBB3C\uC740 \uAC10\uC804 \uD658\uACBD\uC744 \uB9CC\uB4DC\uB294 \uB370 \uC4F0\uC600\uB098\uC694?' => YES
- '12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4\uB294 \uD604\uC7AC \uC0AC\uAC74\uC758 \uB3D9\uAE30\uC640 \uAD00\uB828 \uC788\uB098\uC694?' => YES
- '\uADF8\uAC00 \uB9C8\uD06C\uB97C \uC8FD\uC600\uB098\uC694?'\uCC98\uB7FC '\uADF8'\uC758 \uB300\uC0C1\uC774 \uBD88\uBA85\uD655\uD55C \uC9C8\uBB38 => MAYBE
- '\uB9C8\uD06C\uC758 \uC2E0\uBC1C \uC0C9\uC740 \uAC80\uC740\uC0C9\uC778\uAC00\uC694?' => IRRELEVANT

\uC815\uD655\uD788 {"category":"YES"} \uD615\uC2DD\uC758 JSON \uD558\uB098\uB9CC \uCD9C\uB825\uD55C\uB2E4. category\uB294 YES, NO, MAYBE, IRRELEVANT \uC911 \uD558\uB098\uB2E4. \uC124\uBA85\uC774\uB098 \uB2E4\uB978 \uBB38\uC7A5\uC744 \uC808\uB300 \uCD94\uAC00\uD558\uC9C0 \uC54A\uB294\uB2E4.`;
    const user = `\uD604\uC7AC \uB77C\uC6B4\uB4DC: ${roundNo}
\uD310\uC815\uD560 \uC9C8\uBB38: ${question}`;
    const primary = await requestJudgeCategory(system, user, 2);
    if (!primary) throw new Error("\uC9D1\uC0AC\uAC00 \uB2F5\uC744 \uC815\uB9AC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC2DC\uAC04\uC740 \uB298\uC5B4\uB098\uC9C0 \uC54A\uC558\uC73C\uB2C8 \uB2E4\uC2DC \uC9C8\uBB38\uD574 \uC8FC\uC138\uC694.");
    if (primary !== "MAYBE") return primary;
    const verifier = `\uB108\uB294 \uCD94\uB9AC \uAC8C\uC784\uC758 \uC5C4\uACA9\uD55C \uC7AC\uD310\uC815\uC790\uB2E4. \uC544\uB798 \uC0AC\uC2E4\uD45C\uB85C \uC9C8\uBB38\uC758 \uCC38\xB7\uAC70\uC9D3\uC744 \uB2E4\uC2DC \uD655\uC778\uD55C\uB2E4.
${caseFacts}
\uC8FC\uC5B4\uC640 \uB300\uC0C1\uC774 \uBD84\uBA85\uD558\uACE0 \uC0AC\uC2E4\uD45C\uB85C \uACB0\uC815 \uAC00\uB2A5\uD558\uBA74 \uBC18\uB4DC\uC2DC YES \uB610\uB294 NO\uB2E4. MAYBE\uB294 \uB300\uBA85\uC0AC \uB300\uC0C1\uC774 \uBD88\uBA85\uD655\uD558\uAC70\uB098 \uD55C \uC9C8\uBB38\uC5D0 \uC5EC\uB7EC \uC0AC\uC2E4\uC774 \uC11E\uC5EC \uC77C\uBD80\uB9CC \uB9DE\uC744 \uB54C\uB9CC \uC0AC\uC6A9\uD55C\uB2E4. \uC0AC\uAC74\uACFC \uBB34\uAD00\uD558\uAC70\uB098 \uC9D1\uC0AC\uB97C \uC0AC\uAC74 \uC778\uBB3C\uB85C \uC804\uC81C\uD558\uBA74 IRRELEVANT\uB2E4. \uC815\uD655\uD788 {"category":"YES"} \uD615\uC2DD\uC758 JSON \uD558\uB098\uB9CC \uCD9C\uB825\uD55C\uB2E4.`;
    const verified = await requestJudgeCategory(verifier, user, 2);
    return verified || primary;
  }
  var answerText = { YES: fixed[0], NO: fixed[1], MAYBE: fixed[2], IRRELEVANT: fixed[3] };

  // assets/js/firebase-ranking.js
  var SDK_BASE = "https://www.gstatic.com/firebasejs/12.16.0";
  var COLLECTION = "crime_mark_last_repair_v1";
  var CASE_ID = "mark-last-repair-v1";
  var dynamicImport = (url) => new Function("url", "return import(url)")(url);
  var runtimePromise = null;
  function firebaseConfigured() {
    const config = window.CRIME_FIREBASE_CONFIG || {};
    return ["apiKey", "authDomain", "projectId", "appId"].every((key2) => typeof config[key2] === "string" && config[key2].trim());
  }
  async function firebaseDomainAuthorized() {
    if (!firebaseConfigured()) return false;
    const config = window.CRIME_FIREBASE_CONFIG;
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/projects?key=${encodeURIComponent(config.apiKey)}`);
    if (!response.ok) {
      const error = new Error("Firebase Authentication \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      error.code = "AUTH_CONFIG_UNAVAILABLE";
      throw error;
    }
    const data = await response.json();
    const hostname = location.hostname.toLowerCase();
    return hostname === "localhost" || hostname === "127.0.0.1" || (data.authorizedDomains || []).some((domain) => String(domain).toLowerCase() === hostname);
  }
  async function runtime() {
    if (!firebaseConfigured()) {
      const error = new Error("Firebase \uC124\uC815\uC774 \uC544\uC9C1 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      error.code = "FIREBASE_NOT_CONFIGURED";
      throw error;
    }
    if (runtimePromise) return runtimePromise;
    runtimePromise = (async () => {
      const [appSdk, authSdk, storeSdk] = await Promise.all([
        dynamicImport(`${SDK_BASE}/firebase-app.js`),
        dynamicImport(`${SDK_BASE}/firebase-auth.js`),
        dynamicImport(`${SDK_BASE}/firebase-firestore.js`)
      ]);
      const config = window.CRIME_FIREBASE_CONFIG;
      const existing = appSdk.getApps().find((app2) => app2.name === "crime-ranking");
      const app = existing || appSdk.initializeApp(config, "crime-ranking");
      const auth = authSdk.getAuth(app);
      await authSdk.setPersistence(auth, authSdk.browserLocalPersistence);
      if (typeof auth.authStateReady === "function") await auth.authStateReady();
      return { app, auth, db: storeSdk.getFirestore(app), authSdk, storeSdk };
    })().catch((error) => {
      runtimePromise = null;
      throw error;
    });
    return runtimePromise;
  }
  async function signInGoogle() {
    const cloud = await runtime();
    const provider = new cloud.authSdk.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const credential = await cloud.authSdk.signInWithPopup(cloud.auth, provider);
    return credential.user;
  }
  async function saveCloudRecord(record) {
    const cloud = await runtime();
    const user = cloud.auth.currentUser;
    if (!user) {
      const error = new Error("Google \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.");
      error.code = "AUTH_REQUIRED";
      throw error;
    }
    const ref = cloud.storeSdk.doc(cloud.db, COLLECTION, user.uid);
    return cloud.storeSdk.runTransaction(cloud.db, async (transaction) => {
      const previous = await transaction.get(ref);
      if (previous.exists()) {
        const error = new Error("\uC774 Google \uACC4\uC815\uC740 \uC774\uBBF8 \uC774 \uC0AC\uAC74\uC758 \uAE30\uB85D\uC744 \uB4F1\uB85D\uD588\uC2B5\uB2C8\uB2E4.");
        error.code = "ALREADY_RECORDED";
        error.record = { id: previous.id, ...previous.data(), isMine: true };
        throw error;
      }
      const payload = {
        caseId: CASE_ID,
        displayName: String(user.displayName || "\uC775\uBA85 \uD0D0\uC815").slice(0, 40),
        score2: Math.max(0, Math.min(12, Math.round(Number(record.score2) || 0))),
        solved: record.score2 === 12,
        questionsUsed: Math.max(0, Math.min(12, Math.round(Number(record.questionsUsed) || 0))),
        officialTimeMs: Math.max(0, Math.min(6048e5, Math.round(Number(record.officialTimeMs) || 0))),
        timeRoomVisits: Math.max(0, Math.min(12, Math.round(Number(record.timeRoomVisits) || 0))),
        submittedAt: cloud.storeSdk.serverTimestamp()
      };
      transaction.set(ref, payload);
      return { ...payload, id: user.uid, isMine: true };
    });
  }
  async function loadCloudRankings() {
    const cloud = await runtime();
    const snapshot = await cloud.storeSdk.getDocs(cloud.storeSdk.collection(cloud.db, COLLECTION));
    const uid = cloud.auth.currentUser?.uid || "";
    return snapshot.docs.map((item) => ({ id: item.id, ...item.data(), isMine: item.id === uid })).sort((a, b) => (Number(b.score2) || 0) - (Number(a.score2) || 0) || (Number(a.questionsUsed) || 0) - (Number(b.questionsUsed) || 0) || (Number(a.officialTimeMs) || 0) - (Number(b.officialTimeMs) || 0)).slice(0, 100).map((item, index) => ({ ...item, rank: index + 1 }));
  }
  function cloudErrorMessage(error) {
    const code = error?.code || "";
    if (code === "ALREADY_RECORDED") return "\uC774 Google \uACC4\uC815\uC740 \uC774\uBBF8 \uC774 \uC0AC\uAC74\uC758 \uAE30\uB85D\uC744 \uB4F1\uB85D\uD588\uC2B5\uB2C8\uB2E4.";
    if (code === "FIREBASE_NOT_CONFIGURED") return "\uACF5\uC2DD \uB7AD\uD0B9 \uC800\uC7A5\uC18C\uAC00 \uC544\uC9C1 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.";
    if (code === "auth/popup-closed-by-user") return "Google \uB85C\uADF8\uC778\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
    if (code === "auth/popup-blocked") return "\uB85C\uADF8\uC778 \uD31D\uC5C5\uC774 \uCC28\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800\uC758 \uD31D\uC5C5 \uD5C8\uC6A9 \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.";
    if (code === "auth/unauthorized-domain") return "Firebase \uC2B9\uC778 \uB3C4\uBA54\uC778\uC5D0 sidak.kr\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.";
    if (code === "AUTH_DOMAIN_MISSING") return "Firebase Authentication \uC2B9\uC778 \uB3C4\uBA54\uC778\uC5D0 sidak.kr\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.";
    if (code === "AUTH_CONFIG_UNAVAILABLE") return "Firebase Authentication \uC124\uC815\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    if (code === "permission-denied") return "\uB7AD\uD0B9 \uC800\uC7A5 \uAD8C\uD55C\uC744 \uD655\uC778\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. Firestore \uBCF4\uC548 \uADDC\uCE59\uC744 \uC810\uAC80\uD574 \uC8FC\uC138\uC694.";
    return error?.message || "\uACF5\uC2DD \uB7AD\uD0B9 \uC800\uC7A5\uC18C\uC640 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
  }

  // assets/js/final-evaluation.js
  var finalRubric = [
    { key: "victim", label: "\uD53C\uD574\uC790", expected: "\uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C \uB9AC", correct: (value) => /마크/.test(value), partial: (value) => /(전기\s*수리공|수리공|피해자)/.test(value), reasons: ["\uD53C\uD574\uC790\uB97C \uB9C8\uD06C \uB9AC\uB85C \uC815\uD655\uD788 \uD2B9\uC815\uD588\uC2B5\uB2C8\uB2E4.", "\uD53C\uD574\uC790\uC758 \uC5ED\uD560\uC740 \uB9DE\uC9C0\uB9CC \uC774\uB984\uC744 \uD2B9\uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", "\uD53C\uD574\uC790\uB294 \uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C \uB9AC\uC785\uB2C8\uB2E4."] },
    { key: "killer", label: "\uAC00\uD574\uC790", expected: "\uADF8\uB79C\uD2B8", correct: (value) => /그랜트/.test(value), partial: (value) => /(금화\s*절도범|과거\s*절도범|기록을\s*숨긴)/.test(value), reasons: ["\uAC00\uD574\uC790\uB97C \uADF8\uB79C\uD2B8\uB85C \uC815\uD655\uD788 \uD2B9\uC815\uD588\uC2B5\uB2C8\uB2E4.", "\uAC00\uD574\uC790\uC758 \uC131\uACA9\uC740 \uC9DA\uC5C8\uC9C0\uB9CC \uADF8\uB79C\uD2B8\uB97C \uD2B9\uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", "\uB9C8\uD06C\uB97C \uC0B4\uD574\uD55C \uC0AC\uB78C\uC740 \uADF8\uB79C\uD2B8\uC785\uB2C8\uB2E4."] },
    { key: "place", label: "\uC7A5\uC18C", expected: "\uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4", correct: (value) => /배전실/.test(value), partial: (value) => /(폐극장|극장)/.test(value), reasons: ["\uC0AC\uAC74 \uC7A5\uC18C\uB97C \uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4\uB85C \uD2B9\uC815\uD588\uC2B5\uB2C8\uB2E4.", "\uD3D0\uADF9\uC7A5\uC740 \uB9DE\uC9C0\uB9CC \uBC30\uC804\uC2E4\uAE4C\uC9C0 \uC881\uD788\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", "\uB9C8\uD06C\uAC00 \uC228\uC9C4 \uC7A5\uC18C\uB294 \uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4\uC785\uB2C8\uB2E4."] },
    { key: "method", label: "\uC0AC\uB9DD \uC6D0\uC778", expected: "\uC804\uAE30\uAC00 \uC0B4\uC544 \uC788\uB294 \uC124\uBE44\uC5D0 \uC758\uD55C \uAC10\uC804\uC0AC", correct: (value) => /(감전|전기\s*충격)/.test(value), partial: (value) => /(전기|누전|합선)/.test(value), reasons: ["\uB9C8\uD06C\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC744 \uAC10\uC804\uC73C\uB85C \uC815\uD655\uD788 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4.", "\uC804\uAE30\uC640\uC758 \uAD00\uB828\uC131\uC740 \uB9DE\uC9C0\uB9CC \uAC10\uC804\uC0AC\uB97C \uBA85\uD655\uD788 \uC801\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.", "\uC190\uACFC \uD314\uC758 \uD754\uC801 \uBC0F \uC190\uC0C1\uB41C \uC7A5\uAC11\uC740 \uAC10\uC804\uC0AC\uB97C \uAC00\uB9AC\uD0B5\uB2C8\uB2E4."] },
    { key: "motive", label: "\uB3D9\uAE30", expected: "12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4 \uAE30\uB85D\uC774 \uB4DC\uB7EC\uB098\uB294 \uAC83\uC744 \uB9C9\uAE30 \uC704\uD574", correct: (value) => /(금화|절도|장부|과거\s*기록)/.test(value) && /(숨기|은폐|들키|밝혀|폭로|발각|막|드러)/.test(value), partial: (value) => /(금화|절도|장부|과거|기록|숨기|은폐|폭로)/.test(value), reasons: ["\uACFC\uAC70 \uAE08\uD654 \uC808\uB3C4\uC640 \uC774\uB97C \uC228\uAE30\uB824\uB294 \uB3D9\uAE30\uB97C \uD568\uAED8 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4.", "\uACFC\uAC70 \uC0AC\uAC74 \uB610\uB294 \uC740\uD3D0 \uC758\uB3C4 \uC911 \uD55C\uCABD\uB9CC \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4.", "\uADF8\uB79C\uD2B8\uB294 12\uB144 \uC804 \uAE08\uD654 \uC808\uB3C4 \uAE30\uB85D\uC758 \uD3ED\uB85C\uB97C \uB9C9\uC73C\uB824 \uD588\uC2B5\uB2C8\uB2E4."] },
    { key: "truth", label: "\uC228\uACA8\uC9C4 \uC9C4\uC2E4", expected: "\uADF8\uB79C\uD2B8\uAC00 \uC804\uB3C4\uC131 \uC6A9\uC561\uC73C\uB85C \uBC14\uB2E5\uC744 \uC816\uAC8C \uD574 \uAC10\uC804\uC2DC\uD0A8 \uB4A4 \uCC28\uB2E8\uAE30\uB97C \uB0B4\uB824 \uC0AC\uACE0\uB85C \uC704\uC7A5", correct: (value) => /(물|젖|전도|스프레이|용액)/.test(value) && /(감전|전기)/.test(value) && /(차단기|사고|위장)/.test(value), partial: (value) => [/(물|젖|전도|스프레이|용액)/.test(value), /(감전|전기)/.test(value), /(차단기|사고|위장)/.test(value)].filter(Boolean).length >= 2, reasons: ["\uD568\uC815 \uC900\uBE44, \uAC10\uC804, \uC0AC\uD6C4 \uC0AC\uACE0 \uC704\uC7A5\uAE4C\uC9C0 \uC0AC\uAC74\uC758 \uD750\uB984\uC744 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4.", "\uC0B4\uC778 \uBC29\uBC95\uACFC \uC704\uC7A5 \uACFC\uC815 \uC911 \uC77C\uBD80 \uC5F0\uACB0\uC740 \uB9DE\uC558\uC2B5\uB2C8\uB2E4.", "\uBB3C\uACFC \uC804\uB3C4\uC131 \uC6A9\uC561\uC740 \uD568\uC815\uC774\uC5C8\uACE0, \uCC28\uB2E8\uAE30\uB294 \uB9C8\uD06C\uAC00 \uC4F0\uB7EC\uC9C4 \uB4A4 \uC0AC\uACE0 \uC704\uC7A5\uC744 \uC704\uD574 \uB0B4\uB824\uC84C\uC2B5\uB2C8\uB2E4."] }
  ];
  function evaluateFinalAnswers(answers) {
    const items = finalRubric.map((rule) => {
      const answer = String(answers?.[rule.key] || "").trim();
      const normalized = answer.toLowerCase().replace(/\s+/g, " ");
      const status = rule.correct(normalized) ? "correct" : rule.partial(normalized) ? "partial" : "wrong";
      const reason = rule.reasons[status === "correct" ? 0 : status === "partial" ? 1 : 2];
      return { key: rule.key, label: rule.label, answer, expected: rule.expected, status, reason, points2: status === "correct" ? 2 : status === "partial" ? 1 : 0 };
    });
    const score2 = items.reduce((sum, item) => sum + item.points2, 0);
    return { items, score2, score: score2 / 2, total: items.length, solved: score2 === items.length * 2, correct: items.filter((item) => item.status === "correct").length, partial: items.filter((item) => item.status === "partial").length, wrong: items.filter((item) => item.status === "wrong").length };
  }

  // assets/js/app-round11.js
  var $ = (s) => document.querySelector(s);
  var esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  var currentRound = () => ROUNDS[state.attempt.roundNo - 1];
  var key = (round, id) => `${round}:${id}`;
  var phaseLabel = { CASE_HOME: "\uC0AC\uAC74 \uC2DC\uC791", CASE_START: "\uC0AC\uAC74 \uAC1C\uC694", ROUND_INTRO: "\uB2E4\uC74C \uB77C\uC6B4\uB4DC", IMAGE_REVEAL: "\uADF8\uB9BC \uACF5\uAC1C", CLUE_SELECT: "\uB2E8\uC11C \uC870\uC0AC", COMPANION_SELECT: "\uB3D9\uB8CC \uC758\uACAC", QUESTION_SELECT: "\uC9D1\uC0AC \uC9C8\uBB38", ROUND_SUMMARY: "\uB77C\uC6B4\uB4DC \uC815\uB9AC", FINAL_ANSWER: "\uCD5C\uC885 \uBC1C\uC758", ENDING_STORY: "\uC0AC\uAC74 \uD574\uC124", RESULT: "\uACB0\uACFC" };
  var cloudReady = false;
  var cloudIssue = "";
  function currentEvaluation() {
    return evaluateFinalAnswers(state.finalDraft);
  }
  function evaluationHtml(evaluation) {
    const statusLabel = { correct: "\uC815\uB2F5", partial: "\uBD80\uBD84\uC815\uB2F5", wrong: "\uC624\uB2F5" };
    return `<section class="evaluation-panel"><div class="evaluation-head"><span>\uD56D\uBAA9\uBCC4 \uD310\uC815</span><b>${evaluation.score} / ${evaluation.total}\uC810</b><p>\uC815\uB2F5 ${evaluation.correct} \xB7 \uBD80\uBD84\uC815\uB2F5 ${evaluation.partial} \xB7 \uC624\uB2F5 ${evaluation.wrong}</p></div><div class="evaluation-list">${evaluation.items.map((item) => `<article class="evaluation-row ${item.status}"><header><b>${esc(item.label)}</b><em>${statusLabel[item.status]}</em></header><div class="evaluation-answer"><small>\uB0B4 \uBC1C\uC758</small><p>${esc(item.answer || "\uBBF8\uC785\uB825")}</p></div><div class="evaluation-standard"><small>\uC815\uB2F5 \uAE30\uC900</small><p>${esc(item.expected)}</p></div><footer>${esc(item.reason)}</footer></article>`).join("")}</div></section>`;
  }
  function elapsedMs() {
    if (!state.attempt.startedAt) return 0;
    const started = typeof state.attempt.startedAt === "number" ? state.attempt.startedAt : Date.parse(state.attempt.startedAt);
    const end = state.attempt.completedAt ? typeof state.attempt.completedAt === "number" ? state.attempt.completedAt : Date.parse(state.attempt.completedAt) : Date.now();
    return Math.max(0, end - started) + state.attempt.penaltyMs;
  }
  function formatTime(ms) {
    const sec = Math.floor(ms / 1e3);
    return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
  }
  function setPhase(phase) {
    patchAttempt({ phase });
  }
  function toast(message, error = false) {
    const root2 = $("#toastRoot");
    root2.innerHTML = `<div class="toast ${error ? "error" : ""}">${esc(message)}</div>`;
    setTimeout(() => root2.innerHTML = "", 3400);
  }
  function renderHud() {
    $("#hudRound").textContent = state.attempt.status === "not_started" ? "\uC900\uBE44" : `R${state.attempt.roundNo}/4`;
    const currentMs = elapsedMs();
    $("#hudTime").textContent = formatTime(currentMs);
    const popupTime = $("#popupMiniTime");
    if (popupTime) {
      popupTime.textContent = formatTime(currentMs);
      popupTime.parentElement.classList.toggle("warning", currentMs >= 3e5 && currentMs < 6e5);
      popupTime.parentElement.classList.toggle("danger", currentMs >= 6e5);
    }
    $("#hudTimeStat").classList.toggle("warning", currentMs >= 3e5 && currentMs < 6e5);
    $("#hudTimeStat").classList.toggle("danger", currentMs >= 6e5);
    $("#hudQuestions").textContent = `${state.attempt.totalQuestions}\uD68C`;
    $("#hudLeader").textContent = state.leader ? formatTime(state.leader.timeMs) : "\uAE30\uB85D \uC5C6\uC74C";
    $("#hudLeaderMeta").textContent = state.leader ? `${(Number(state.leader.score2) || 0) / 2}/6\uC810 \xB7 \uC9C8\uBB38 ${state.leader.questions}\uD68C` : "";
  }
  function flashPenalty(label = "+1:00") {
    const stat = $("#hudTimeStat"), badge = $("#hudPenalty"), popupTimer = document.querySelector(".popup-mini-timer");
    badge.textContent = label;
    stat.classList.remove("penalty-flash");
    popupTimer?.classList.remove("penalty-flash");
    void stat.offsetWidth;
    stat.classList.add("penalty-flash");
    popupTimer?.classList.add("penalty-flash");
    setTimeout(() => {
      badge.textContent = "";
      stat.classList.remove("penalty-flash");
      popupTimer?.classList.remove("penalty-flash");
    }, 1800);
    renderHud();
  }
  function detailParagraphs() {
    return esc(CASE_OVERVIEW_DETAILS).split(/\n\n/).map((text) => `<p>${text}</p>`).join("");
  }
  function overviewHtml() {
    return `<section class="brief-main"><span>\uCD5C\uCD08 \uACF5\uAC1C</span><strong>${esc(CASE_OVERVIEW_SUMMARY)}</strong></section><section class="brief-details"><small>\uD604\uC7A5 \uC0C1\uC138 \uAE30\uB85D</small>${detailParagraphs()}</section>`;
  }
  function timeRoomLimit(roundNo = state.attempt.roundNo) {
    return (TIME_ROOM_HINTS[roundNo] || []).length;
  }
  function timeRoomCount(roundNo = state.attempt.roundNo) {
    return Math.min(timeRoomLimit(roundNo), Number(state.timeRoomVisits?.[roundNo]) || 0);
  }
  function revealedTimeRoomFacts() {
    return ROUNDS.slice(0, state.attempt.roundNo).flatMap((round) => (TIME_ROOM_HINTS[round.no] || []).slice(0, timeRoomCount(round.no)));
  }
  function revealedQuestionFacts(roundNo = state.attempt.roundNo) {
    return state.questions.filter((item) => item.roundNo <= roundNo).map((item) => ({ roundNo: item.roundNo, text: item.text, answer: item.answerText || answerText[item.category] || answerText.MAYBE }));
  }
  function currentCompanionContext(roundNo = state.attempt.roundNo) {
    const count = timeRoomCount(roundNo), facts = revealedTimeRoomFacts(), questionFacts = revealedQuestionFacts(roundNo);
    return { facts, currentFacts: (TIME_ROOM_HINTS[roundNo] || []).slice(0, count), requiredTerms: count ? TIME_ROOM_HINT_TERMS[roundNo]?.[count - 1] || [] : [], questionFacts, latestQuestion: questionFacts.at(-1) || null, allowedContext: [...facts, ...questionFacts.flatMap((item) => [item.text, item.answer])].join(" ") };
  }
  function currentFinalContext() {
    const context = currentCompanionContext(4);
    return { ...context, clueIds: [...state.attempt.clueIds] };
  }
  function returnFromTimeRoom(origin) {
    if (origin === "question") return openQuestionSelect;
    if (origin === "clue") return openClueSelect;
    return openCompanionSelect;
  }
  function isBetterRecord(candidate, current) {
    const candidateScore = Number(candidate?.score2) || 0, currentScore = Number(current?.score2) || 0;
    return !current || candidateScore > currentScore || candidateScore === currentScore && (candidate.questions < current.questions || candidate.questions === current.questions && candidate.timeMs < current.timeMs);
  }
  function readDemoLeader() {
    try {
      const value = JSON.parse(localStorage.getItem("markMysteryLocalLeaderV2") || "null");
      if (value && Number.isFinite(value.timeMs) && Number.isFinite(value.questions) && Number.isFinite(value.score2)) return value;
    } catch {
    }
    return null;
  }
  function saveDemoLeader() {
    const evaluation = currentEvaluation();
    const candidate = { timeMs: elapsedMs(), questions: state.attempt.totalQuestions, score2: evaluation.score2, name: "\uC774 \uAE30\uAE30\uC758 \uCD5C\uACE0 \uAE30\uB85D" };
    const current = readDemoLeader();
    if (isBetterRecord(candidate, current)) {
      try {
        localStorage.setItem("markMysteryLocalLeaderV2", JSON.stringify(candidate));
      } catch {
      }
      state.leader = candidate;
      notify();
    }
  }
  async function loadLeader() {
    const demo = readDemoLeader();
    if (demo) state.leader = demo;
    if (firebaseConfigured()) {
      try {
        if (!await firebaseDomainAuthorized()) {
          const error = new Error("\uC2B9\uC778 \uB3C4\uBA54\uC778 \uB204\uB77D");
          error.code = "AUTH_DOMAIN_MISSING";
          throw error;
        }
        const first = (await loadCloudRankings())[0];
        cloudReady = true;
        cloudIssue = "";
        if (first) state.leader = { timeMs: Number(first.officialTimeMs) || 0, questions: Number(first.questionsUsed) || 0, score2: Number(first.score2) || 0, name: first.displayName || "1\uC704" };
      } catch (error) {
        cloudReady = false;
        cloudIssue = cloudErrorMessage(error);
      }
    }
    notify();
    renderHud();
  }
  function renderDashboard() {
    renderHud();
    const roundNo = state.attempt.roundNo;
    const tiles = ROUNDS.map((round) => {
      const cls = state.attempt.status === "completed" || round.no < roundNo ? "done" : round.no === roundNo ? "active" : "";
      const status = state.attempt.status === "completed" || round.no < roundNo ? "\uC644\uB8CC" : round.no === roundNo ? phaseLabel[state.attempt.phase] || "\uC9C4\uD589 \uC911" : "\uC7A0\uAE40";
      return `<article class="round-tile ${cls}"><small>ROUND ${round.no}</small><b>${round.title}</b><span>${status}</span></article>`;
    }).join("");
    const name = state.user?.displayName || "\uB85C\uADF8\uC778 \uD544\uC694";
    const primary = state.attempt.status === "completed" ? "\uB0B4 \uACB0\uACFC \uBCF4\uAE30" : state.attempt.status === "in_progress" ? "\uC774\uC5B4\uC11C \uC9C4\uD589" : "\uC0AC\uAC74 \uC2DC\uC791";
    const cast = COMPANIONS.map((c) => `<span class="cast-mini"><img src="${c.image}" alt="${c.name}"><b>${c.name}</b></span>`).join("");
    $("#caseDashboard").innerHTML = `<div><span class="dashboard-kicker">\uC0AC\uAC74 \uAE30\uB85D 01 \xB7 \uBBF8\uC2A4\uD130\uB9AC \uD0C0\uC784</span><h1 class="dashboard-title">\uB9C8\uD06C\uC758<br>\uB9C8\uC9C0\uB9C9 \uC218\uB9AC</h1><p class="dashboard-lead">\uD3ED\uD48D\uC6B0\uAC00 \uCE58\uB358 \uBC24, \uD3D0\uADF9\uC7A5 \uBC30\uC804\uC2E4\uC5D0\uC11C \uBC1C\uACAC\uB41C \uC804\uAE30 \uC218\uB9AC\uACF5.<br>\uB124 \uBA85\uC758 \uB3D9\uB8CC\uC640 \uD568\uAED8 \uC0AC\uAC74\uC758 \uC804\uB9D0\uC744 \uCD94\uB9AC\uD558\uC138\uC694.</p><div class="round-progress">${tiles}</div><div class="cast-strip" aria-label="\uD568\uAED8\uD558\uB294 \uB3D9\uB8CC">${cast}</div><div class="dash-actions"><button class="button primary" id="continueButton">${primary} \u2192</button></div><p class="dash-note">\uC9C4\uD589 \uC0C1\uD669\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC790\uB3D9 \uC800\uC7A5\uB429\uB2C8\uB2E4 \xB7 \uC9C8\uBB38\uC744 \uD655\uC815\uD560 \uB54C\uB9C8\uB2E4 \uAC1C\uC778 \uC2DC\uAC04 +1\uBD84</p></div>`;
    $("#continueButton").onclick = startOrResume;
  }
  async function startOrResume() {
    if (state.attempt.status === "completed") {
      openResult();
      return;
    }
    if (state.mode === "demo") {
      if (state.attempt.status === "not_started") {
        resetDemo();
        openCaseStart();
      } else openByPhase();
      return;
    }
    if (!state.user) {
      openLogin();
      return;
    }
    try {
      const data = await api.start();
      applyServerState(data);
      openByPhase();
    } catch (e) {
      toast(e.message, true);
    }
  }
  function openLogin() {
    const configured = state.config.googleClientId;
    openPopup({ kicker: "\uACF5\uC2DD \uAE30\uB85D \uB3C4\uC804", title: "Google \uB85C\uADF8\uC778 \uD6C4 \uC0AC\uAC74\uC744 \uC2DC\uC791\uD558\uC138\uC694", lead: "\uACF5\uC2DD \uAE30\uB85D\uACFC \uC0AC\uAC74\uB2F9 1\uD68C \uB3C4\uC804 \uC81C\uD55C\uC740 Google \uACC4\uC815\uC744 \uAE30\uC900\uC73C\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4.", body: configured ? '<div id="googlePopupButton"></div>' : '<div class="confirm-box">\uACF5\uC2DD \uAE30\uB85D \uC811\uC218\uB294 \uD604\uC7AC \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC9C0\uAE08\uC740 \uAC1C\uC778 \uAE30\uB85D\uC73C\uB85C \uC0AC\uAC74\uC744 \uC9C4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</div>', actions: [{ label: "\uAC1C\uC778 \uAE30\uB85D\uC73C\uB85C \uC0AC\uAC74 \uC2DC\uC791", onClick: () => {
      closePopup();
      state.mode = "demo";
      resetDemo();
      openCaseStart();
    } }], dismissible: true });
    if (configured) renderGoogleButton("googlePopupButton");
  }
  function renderGoogleButton(id) {
    if (!window.google?.accounts?.id) return;
    window.google.accounts.id.renderButton(document.getElementById(id), { theme: "outline", size: "large", text: "signin_with", shape: "rectangular", locale: "ko", width: 320 });
  }
  window.handleGoogleCredential = async ({ credential }) => {
    setPopupBusy(true, "Google \uACC4\uC815\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026");
    try {
      const data = await api.authGoogle(credential);
      state.user = data.user;
      state.attempt = { ...state.attempt, ...data.attempt || {} };
      notify();
      closePopup();
      await startOrResume();
    } catch (e) {
      setPopupBusy(false);
      toast(e.message, true);
    }
  };
  function openCaseStart() {
    setPhase("CASE_START");
    const cast = COMPANIONS.map((c) => `<span class="cast-mini"><img src="${c.image}" alt="${c.name}"><b>${c.name}</b></span>`).join("");
    openPopup({ kicker: "CASE 01 \xB7 \uC0AC\uAC74 \uAC1C\uC694", title: "\uC804\uAE30 \uC218\uB9AC\uACF5 \uB9C8\uD06C\uC758 \uC0AC\uB9DD \uC0AC\uAC74", lead: "\uD604\uC7A5\uC5D0 \uCC98\uC74C \uACF5\uAC1C\uB41C \uB0B4\uC6A9\uC785\uB2C8\uB2E4. \uB2E8\uC21C \uC0AC\uACE0\uC778\uC9C0\uBD80\uD130 \uC758\uC2EC\uD574 \uBCF4\uC138\uC694.", body: `<div class="case-brief"><div class="brief-scene">${overviewHtml()}</div><div class="brief-questions"><span><b>\uD53C\uD574\uC790\uB294 \uB204\uAD6C\uC778\uAC00?</b></span><span><b>\uC65C \uC8FD\uC5C8\uB294\uAC00?</b></span><span><b>\uC228\uACA8\uC9C4 \uC9C4\uC2E4\uC740 \uBB34\uC5C7\uC778\uAC00?</b></span></div></div><div class="cast-strip" aria-label="\uD568\uAED8 \uCD94\uB9AC\uD560 \uB3D9\uB8CC">${cast}</div><div class="guide-step"><b>1</b><span>\uBA3C\uC800 \uCCAB \uBC88\uC9F8 \uD604\uC7A5 \uC0AC\uC9C4\uC744 \uD655\uC778\uD569\uB2C8\uB2E4. \uC0AC\uC9C4\uC774 \uACF5\uAC1C\uB418\uBA74 \u2018\uC2DC\uAC04\uC758 \uBC29\u2019\uC5D0\uC11C \uB77C\uC6B4\uB4DC\uB9C8\uB2E4 \uCD94\uAC00 \uC815\uBCF4 3\uAC1C\uB97C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span></div>`, actions: [{ label: "\uC0AC\uAC74 \uB0B4\uC6A9\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4 \u2192", primary: true, onClick: openRoundIntro }] });
  }
  function openRoundIntro() {
    setPhase("ROUND_INTRO");
    const round = currentRound();
    openPopup({ kicker: `ROUND ${round.no} / 4`, title: "\uC0C8\uB85C\uC6B4 \uADF8\uB9BC\uC774 \uACF5\uAC1C\uB429\uB2C8\uB2E4", lead: round.intro, body: `<div class="summary-grid"><div><span>\uC774\uBC88 \uB77C\uC6B4\uB4DC \uB2E8\uC11C</span><b>3\uAC1C</b></div><div><span>\uC9D1\uC0AC \uC9C8\uBB38</span><b>\uCD5C\uB300 3\uD68C</b></div><div><span>\uB204\uC801 \uC9C8\uBB38</span><b>${state.attempt.totalQuestions}\uD68C</b></div></div>`, actions: [{ label: "\uADF8\uB9BC \uACF5\uAC1C \u2192", primary: true, onClick: openImage }] });
  }
  function openImage() {
    setPhase("IMAGE_REVEAL");
    const round = currentRound();
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uADF8\uB9BC \uACF5\uAC1C`, title: round.title, lead: "\uC0AC\uC9C4 \uC804\uCCB4\uB97C \uD655\uC778\uD558\uC138\uC694. \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uB2E8\uC11C \uC138 \uACF3\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4.", body: imageHtml(round, false), actions: [{ label: "\uC0AC\uC9C4\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4 \xB7 \uB2E8\uC11C \uCC3E\uAE30 \u2192", primary: true, onClick: openClueSelect }] });
  }
  function imageHtml(round, showPins = true) {
    const opened = new Set(state.attempt.clueIds.filter((id) => id.startsWith(`r${round.no}_`)));
    const pins = showPins ? round.clues.map((c) => `<button class="clue-pin ${opened.has(c.id) ? "checked" : ""}" type="button" data-clue="${c.id}" aria-label="${c.title} \uB2E8\uC11C">${opened.has(c.id) ? "\u2713" : "?"}</button>`).join("") : "";
    return `<figure class="popup-image-frame"><div class="popup-image-canvas"><img src="${round.image}" alt="${esc(round.title)} \uD604\uC7A5">${pins}</div><figcaption class="image-caption"><span>ROUND ${round.no} \uD604\uC7A5 \uC0AC\uC9C4</span><b>${showPins ? "\uBB3C\uC74C\uD45C\uB97C \uB20C\uB7EC \uC870\uC0AC\uD558\uC138\uC694" : "\uC0AC\uC9C4 \uC804\uCCB4 \uACF5\uAC1C"}</b></figcaption></figure>`;
  }
  function openClueSelect() {
    setPhase("CLUE_SELECT");
    const round = currentRound();
    const opened = new Set(state.attempt.clueIds.filter((id) => id.startsWith(`r${round.no}_`)));
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uB2E8\uC11C ${opened.size}/3`, title: opened.size === 0 ? "\uC0AC\uC9C4 \uC18D \uBB3C\uC74C\uD45C\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694" : "\uB2E4\uC74C \uB2E8\uC11C\uB97C \uCC3E\uC544\uC8FC\uC138\uC694", lead: "\uC0AC\uC9C4\uC740 \uD654\uBA74 \uD3ED\uC5D0 \uB9DE\uCDB0 \uC6D0\uBCF8 \uBE44\uC728\uB85C \uD45C\uC2DC\uB429\uB2C8\uB2E4.", body: `<div class="clue-progress"><span>\uD604\uC7A5 \uB2E8\uC11C \uC9C4\uD589</span><span class="progress-dots">${round.clues.map((_, i) => `<i class="${i < opened.size ? "on" : ""}"></i>`).join("")}</span></div>${imageHtml(round, true)}<div class="clue-list">${round.clues.map((c) => `<button class="clue-card ${opened.has(c.id) ? "open" : ""}" type="button" data-clue-card="${c.id}"><b>${esc(c.title)}</b>${opened.has(c.id) ? esc(c.text) : "\uBB3C\uC74C\uD45C\uB97C \uB20C\uB7EC \uD655\uC778"}</button>`).join("")}</div>`, actions: [{ label: opened.size === 3 ? "\uB2E8\uC11C 3\uAC1C \uD655\uC778 \uC644\uB8CC \xB7 \uB3D9\uB8CC \uC758\uACAC \u2192" : "\uC0AC\uC9C4\uC758 \uBB3C\uC74C\uD45C\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694", primary: true, disabled: opened.size !== 3, onClick: openCompanionSelect }, { label: `\u23F3 \uC2DC\uAC04\uC758 \uBC29 ${timeRoomCount(round.no)}/${timeRoomLimit(round.no)}`, onClick: () => openTimeRoom("clue") }] });
    document.querySelectorAll("[data-clue],[data-clue-card]").forEach((el) => el.onclick = () => openClue(el.dataset.clue || el.dataset.clueCard));
  }
  async function openClue(clueId) {
    const round = currentRound();
    const clue = round.clues.find((c) => c.id === clueId);
    const already = state.attempt.clueIds.includes(clueId);
    if (!already) {
      state.attempt.clueIds.push(clueId);
      if (state.mode === "server") {
        try {
          const data = await api.clue({ attemptId: state.attempt.id, roundNo: round.no, clueId });
          applyServerState(data);
        } catch (e) {
          state.attempt.clueIds = state.attempt.clueIds.filter((x) => x !== clueId);
          toast(e.message, true);
          return;
        }
      }
      notify();
    }
    setPhase("CLUE_RESULT");
    const done = state.attempt.clueIds.filter((id) => id.startsWith(`r${round.no}_`)).length === 3;
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uD604\uC7A5 \uB2E8\uC11C ${done ? "3/3" : ""}`, title: clue.title, lead: already ? "\uC774\uBBF8 \uD655\uC778\uD55C \uB2E8\uC11C\uC785\uB2C8\uB2E4. \uB2E4\uC2DC \uD655\uC778\uD574\uB3C4 \uC2DC\uAC04 \uBE44\uC6A9\uC740 \uC5C6\uC2B5\uB2C8\uB2E4." : "\uD604\uC7A5 \uC870\uC0AC \uACB0\uACFC", body: `<div class="result-box"><small>\uD68D\uB4DD \uB2E8\uC11C</small><b>${esc(clue.title)}</b><p>${esc(clue.text)}</p></div>`, actions: [{ label: done ? "\uB3D9\uB8CC \uC758\uACAC \uB4E3\uAE30 \u2192" : "\uB2E4\uC74C \uB2E8\uC11C \uCC3E\uAE30 \u2192", primary: true, onClick: done ? openCompanionSelect : openClueSelect }] });
  }
  function openTimeRoom(origin = "companion") {
    const round = currentRound();
    const count = timeRoomCount(round.no);
    const hints = TIME_ROOM_HINTS[round.no] || [];
    const back = returnFromTimeRoom(origin);
    if (count >= hints.length) {
      openPopup({ kicker: `ROUND ${round.no} \xB7 \uC2DC\uAC04\uC758 \uBC29`, title: "\uC774\uBC88 \uB77C\uC6B4\uB4DC\uC758 \uD78C\uD2B8\uB97C \uBAA8\uB450 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4", lead: "\uC774\uBBF8 \uC5BB\uC740 \uD78C\uD2B8\uB294 \uB2E4\uC2DC \uBD10\uB3C4 \uC2DC\uAC04\uC774 \uB298\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", body: `<div class="time-room-hints">${hints.map((hint, i) => `<article><small>\uCD94\uAC00 \uC815\uBCF4 ${i + 1}</small><b>${esc(hint)}</b></article>`).join("")}</div>`, actions: [{ label: "\uC218\uC0AC\uB85C \uB3CC\uC544\uAC00\uAE30 \u2192", primary: true, onClick: back }] });
      return;
    }
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uC2DC\uAC04\uC758 \uBC29`, title: "\uCD94\uAC00 \uC815\uBCF4\uB97C \uD655\uC778\uD560\uAE4C\uC694?", lead: "\uD78C\uD2B8\uB97C \uC5BB\uB294 \uB300\uC2E0 \uAC1C\uC778 \uAE30\uB85D\uC5D0 \uC2DC\uAC04\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.", body: `<div class="time-room-door"><span>\u23F3</span><b>\uCD94\uAC00 \uC815\uBCF4 ${count + 1} / ${hints.length}</b><p>\uC785\uC7A5 \uC989\uC2DC \uAC1C\uC778 \uC2DC\uAC04 <strong>+2:00</strong><br>\uD55C \uBC88 \uD655\uC778\uD55C \uC815\uBCF4\uB294 \uC0AC\uAC74 \uAE30\uB85D\uC5D0\uC11C \uBB34\uB8CC\uB85C \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div>`, actions: [{ label: "\uB3CC\uC544\uAC00\uAE30", onClick: back }, { label: "\uC2DC\uAC04 +2:00 \xB7 \uC785\uC7A5 \u2192", primary: true, onClick: () => enterTimeRoom(origin) }] });
  }
  async function enterTimeRoom(origin = "companion") {
    const round = currentRound();
    const back = returnFromTimeRoom(origin);
    setPopupBusy(true, "\uC2DC\uAC04\uC758 \uBC29\uC5D0\uC11C \uCD94\uAC00 \uAE30\uB85D\uC744 \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026");
    try {
      let hintNo = timeRoomCount(round.no) + 1;
      if (state.mode === "server") {
        const data = await api.timeRoom({ attemptId: state.attempt.id, roundNo: round.no });
        hintNo = Number(data.hintNo) || hintNo;
        state.attempt.penaltyMs = Number(data.totalPenaltyMs) || state.attempt.penaltyMs + 12e4;
      } else state.attempt.penaltyMs += 12e4;
      state.timeRoomVisits[round.no] = hintNo;
      notify();
      flashPenalty("+2:00");
      const hint = TIME_ROOM_HINTS[round.no][hintNo - 1];
      const limit = timeRoomLimit(round.no);
      openPopup({ kicker: `ROUND ${round.no} \xB7 \uC2DC\uAC04\uC758 \uBC29 ${hintNo}/${limit}`, title: "\uCD94\uAC00 \uC815\uBCF4\uB97C \uD68D\uB4DD\uD588\uC2B5\uB2C8\uB2E4", lead: `\uAC1C\uC778 \uC2DC\uAC04 +2:00 \xB7 \uC774\uBC88 \uB77C\uC6B4\uB4DC \uD78C\uD2B8 ${hintNo}/${limit}`, body: `<div class="time-room-reveal"><span>\uC0C8\uB85C\uC6B4 \uB2E8\uC11C</span><b>${esc(hint)}</b><p>\uC774 \uC815\uBCF4\uB294 \uC0AC\uAC74 \uAE30\uB85D\uC5D0 \uBCF4\uAD00\uB418\uBA70, \uC544\uC9C1 \uC758\uACAC\uC744 \uB4E3\uC9C0 \uC54A\uC740 \uB3D9\uB8CC\uB4E4\uC5D0\uAC8C\uB3C4 \uACF5\uC720\uB429\uB2C8\uB2E4.</p></div>`, actions: [{ label: hintNo < limit ? "\uD78C\uD2B8 \uD558\uB098 \uB354 \uBCF4\uAE30 (+2:00)" : "\uD655\uC778\uD55C \uD78C\uD2B8 \uB2E4\uC2DC \uBCF4\uAE30", onClick: () => openTimeRoom(origin) }, { label: "\uC218\uC0AC\uB85C \uB3CC\uC544\uAC00\uAE30 \u2192", primary: true, onClick: back }] });
    } catch (e) {
      setPopupBusy(false);
      toast(e.message || "\uC2DC\uAC04\uC758 \uBC29\uC5D0 \uC785\uC7A5\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.", true);
      openTimeRoom(origin);
    }
  }
  function openCompanionSelect() {
    setPhase("COMPANION_SELECT");
    const round = currentRound();
    const heard = new Set(roundHints().map((h) => h.companionId));
    const allHeard = heard.size === 4;
    const roomCount = timeRoomCount(round.no), roomLimit = timeRoomLimit(round.no), questionCount = revealedQuestionFacts(round.no).length;
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uB3D9\uB8CC \uC758\uACAC ${heard.size}/4`, title: allHeard ? "\uB124 \uBA85\uC758 \uC758\uACAC\uC744 \uBAA8\uB450 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4" : "\uB204\uAD6C\uC758 \uC758\uACAC\uC744 \uB4E4\uC744\uAE4C\uC694?", lead: "\uC544\uC9C1 \uC758\uACAC\uC744 \uB4E3\uC9C0 \uC54A\uC740 \uB3D9\uB8CC\uB294 \uD604\uC7AC\uAE4C\uC9C0 \uACF5\uC720\uB41C \uBAA8\uB4E0 \uC815\uBCF4\uC640 \uC9D1\uC0AC\uC758 \uB2F5\uBCC0\uC744 \uBC14\uD0D5\uC73C\uB85C \uC9C8\uBB38\uC744 \uC81C\uC548\uD569\uB2C8\uB2E4.", body: `<div class="team-progress"><span>\uD655\uC778\uD55C \uB3D9\uB8CC ${heard.size}\uBA85</span><span class="progress-dots">${COMPANIONS.map((_, i) => `<i class="${i < heard.size ? "on" : ""}"></i>`).join("")}</span></div><div class="companion-grid">${COMPANIONS.map((c) => `<button class="companion-button ${heard.has(c.id) ? "viewed" : ""}" data-companion="${c.id}" type="button"><img src="${c.image}" alt="${c.name} \uC77C\uB7EC\uC2A4\uD2B8"><span><b>${c.name}</b><small>${c.role}</small><small class="shared-hints">${heard.has(c.id) ? "\uAE30\uC874 \uC758\uACAC \uC720\uC9C0" : `\uC2DC\uAC04\uC758 \uBC29 ${roomCount}\uAC1C \xB7 \uC9D1\uC0AC \uB2F5\uBCC0 ${questionCount}\uAC1C \uACF5\uC720\uB428`}</small></span>${heard.has(c.id) ? '<em class="viewed-badge">\uC758\uACAC \uD655\uC778</em>' : ""}</button>`).join("")}</div><div class="time-room-callout"><b>\uCD94\uB9AC\uAC00 \uB9C9\uD614\uB098\uC694?</b><span>\uC2DC\uAC04\uC758 \uBC29 \uD78C\uD2B8 ${roomCount}/${roomLimit} \xB7 \uC0C8 \uD78C\uD2B8\uB9C8\uB2E4 +2:00</span></div>${allHeard ? '<div class="team-ready">\uCD94\uCC9C \uC9C8\uBB38\uC774 \uBAA8\uB450 \uC900\uBE44\uB410\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uC9D1\uC0AC\uC5D0\uAC8C \uC9C8\uBB38\uD558\uC138\uC694.</div>' : ""}`, actions: [{ label: allHeard ? "\uCD94\uCC9C \uC9C8\uBB38 \uC120\uD0DD\uD558\uAE30 \u2192" : "\uD604\uC7AC\uAE4C\uC9C0\uC758 \uC758\uACAC\uC73C\uB85C \uC9C8\uBB38\uD558\uAE30 \u2192", primary: true, onClick: openQuestionSelect }, { label: `\u23F3 \uC2DC\uAC04\uC758 \uBC29 ${roomCount}/${roomLimit}`, onClick: () => openTimeRoom("companion") }, { label: "\uC0AC\uAC74 \uAE30\uB85D", onClick: openHistory }] });
    document.querySelectorAll("[data-companion]").forEach((el) => el.onclick = () => openCompanion(el.dataset.companion));
  }
  async function openCompanion(companionId) {
    const round = currentRound();
    const companion = COMPANIONS.find((c) => c.id === companionId);
    const hintKey = key(round.no, companionId);
    const companionContext = currentCompanionContext(round.no);
    let hint = state.hints[hintKey];
    if (hint && (!isValidCompanionHint(hint, round.no, companionId, [], [], companionContext.allowedContext) || hint.source === "fallback")) {
      delete state.hints[hintKey];
      hint = null;
    }
    if (!hint) {
      setPopupBusy(true, `${companion.name}, \uC758\uACAC\uC744 \uC815\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026 \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694.`);
      try {
        hint = await companionHint(round.no, companionId, companionContext);
        if (state.mode === "server") {
          const data = await api.hint({ attemptId: state.attempt.id, roundNo: round.no, companionId, question: hint.question, comment: hint.comment });
          const serverHint = data.hint || hint;
          if (!isValidCompanionHint(serverHint, round.no, companionId, [], [], companionContext.allowedContext)) throw new Error("\uC800\uC7A5\uB41C \uB3D9\uB8CC \uC758\uACAC\uC774 \uACF5\uAC1C \uB2E8\uC11C \uADDC\uCE59\uC5D0 \uB9DE\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.");
          hint = { ...serverHint, source: "puter" };
        }
        state.hints[hintKey] = { ...hint, source: "puter", timeRoomFactCount: companionContext.currentFacts.length, questionFactCount: companionContext.questionFacts.length, companionId, name: companion.name };
      } catch (e) {
        setPopupBusy(false);
        const delayed = e?.code === "PUTER_TIMEOUT", unavailable = e?.code === "PUTER_UNAVAILABLE";
        toast(delayed ? "\uC758\uACAC \uC815\uB9AC\uAC00 \uAE38\uC5B4\uC838 \uC774\uBC88 \uC694\uCCAD\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4. \uC9C4\uD589 \uB0B4\uC6A9\uC740 \uADF8\uB300\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4." : unavailable ? "\uB3D9\uB8CC\uC640\uC758 \uC5F0\uACB0\uC774 \uC7A0\uC2DC \uB04A\uACBC\uC2B5\uB2C8\uB2E4. \uC9C4\uD589 \uB0B4\uC6A9\uC740 \uADF8\uB300\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4." : "\uB3D9\uB8CC\uAC00 \uC0DD\uAC01\uC744 \uC815\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4 \uC8FC\uC138\uC694.", true);
        openPopup({ kicker: `ROUND ${round.no} \xB7 ${delayed ? "\uC7A0\uC2DC \uC9C0\uC5F0 \uC911" : unavailable ? "\uC5F0\uACB0 \uD655\uC778 \uC911" : "\uC7A0\uC2DC \uC0DD\uAC01 \uC911"}`, title: delayed ? "\uC758\uACAC \uC815\uB9AC\uAC00 \uC870\uAE08 \uB2A6\uC5B4\uC84C\uC2B5\uB2C8\uB2E4" : unavailable ? "\uB3D9\uB8CC\uC640\uC758 \uC5F0\uACB0\uC774 \uC7A0\uC2DC \uB04A\uACBC\uC2B5\uB2C8\uB2E4" : "\uB3D9\uB8CC\uAC00 \uC0DD\uAC01\uC744 \uAC00\uB2E4\uB4EC\uACE0 \uC788\uC2B5\uB2C8\uB2E4", lead: delayed ? "\uAE30\uB2E4\uB9AC\uB358 \uC694\uCCAD\uC740 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4. \uC2DC\uAC04\uC774\uB098 \uC9C4\uD589 \uB0B4\uC6A9\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." : unavailable ? "\uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4\uC8FC\uC138\uC694. \uC218\uC0AC \uAE30\uB85D\uACFC \uAC1C\uC778 \uC2DC\uAC04\uC740 \uADF8\uB300\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4." : "\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uBA74 \uC9C0\uAE08\uAE4C\uC9C0\uC758 \uB2E8\uC11C\uB97C \uC0B4\uD3B4\uBCF4\uACE0 \uC758\uACAC\uC744 \uB4E4\uB824\uC90D\uB2C8\uB2E4.", body: `<div class="confirm-box">${esc(companion.name)}\uC5D0\uAC8C \uB2E4\uC2DC \uB9D0\uC744 \uAC78\uC5B4 \uC758\uACAC\uC744 \uB4E4\uC5B4\uBCF4\uC138\uC694.</div>`, actions: [{ label: "\uB2E4\uC2DC \uC758\uACAC \uB4E3\uAE30 \u2192", primary: true, onClick: () => openCompanion(companionId) }, { label: "\uB2E4\uB978 \uB3D9\uB8CC\uC5D0\uAC8C \uAC00\uAE30", onClick: openCompanionSelect }] });
        return;
      }
    }
    setPhase("COMPANION_RESULT");
    const sharedCount = Number(hint.timeRoomFactCount) || 0, sharedQuestions = Number(hint.questionFactCount) || 0;
    openPopup({ kicker: `ROUND ${round.no} \xB7 ${companion.name}`, title: `${companion.name}\uC758 \uC758\uACAC`, lead: sharedCount || sharedQuestions ? `\uC2DC\uAC04\uC758 \uBC29 \uC815\uBCF4 ${sharedCount}\uAC1C\uC640 \uC9D1\uC0AC \uB2F5\uBCC0 ${sharedQuestions}\uAC1C\uB97C \uACF5\uC720\uD55C \uB4A4 \uB4E4\uC740 \uC758\uACAC\uC785\uB2C8\uB2E4.` : "\uD604\uC7AC \uACF5\uAC1C\uB41C \uD604\uC7A5 \uB2E8\uC11C\uB97C \uBC14\uD0D5\uC73C\uB85C \uB4E4\uC740 \uC758\uACAC\uC785\uB2C8\uB2E4.", body: `<div class="companion-scene"><figure class="companion-portrait"><img src="${companion.image}" alt="${companion.name} \uCD08\uC0C1\uD654"><figcaption>${companion.name}<small>${companion.role}</small></figcaption></figure><article class="speech-bubble"><b>${companion.name}</b>${sharedCount || sharedQuestions ? `<small class="speech-shared">\uC2DC\uAC04\uC758 \uBC29 ${sharedCount}\uAC1C \xB7 \uC9D1\uC0AC \uB2F5\uBCC0 ${sharedQuestions}\uAC1C \uBC18\uC601</small>` : ""}<p>${esc(hint.comment)}</p><button id="useHintQuestion" class="question-chip" type="button">\uCD94\uCC9C \uC9C8\uBB38\uC73C\uB85C \uC120\uD0DD \u2192<br>${esc(hint.question)}</button></article></div>`, actions: [{ label: "\uB2E4\uB978 \uB3D9\uB8CC \uC758\uACAC \uB4E3\uAE30", onClick: openCompanionSelect }, { label: "\uC9C8\uBB38 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9 \u2192", primary: true, onClick: openQuestionSelect }] });
    $("#useHintQuestion").onclick = () => openQuestionSelect(hint.question);
  }
  function roundHints() {
    return Object.entries(state.hints).filter(([k]) => k.startsWith(`${state.attempt.roundNo}:`)).map(([, v]) => {
      const companion = COMPANIONS.find((c) => c.id === v.companionId);
      return { ...v, name: v.name || companion?.name || "\uB3D9\uB8CC" };
    });
  }
  function openQuestionSelect(preset = "") {
    setPhase("QUESTION_SELECT");
    const round = currentRound();
    const hints = roundHints();
    const current = state.attempt.questionCount;
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uC9C8\uBB38 ${current}/3`, title: "\uC9D1\uC0AC\uC5D0\uAC8C \uBB34\uC5C7\uC744 \uBB3C\uC744\uAE4C\uC694?", lead: "\uCD94\uCC9C \uC9C8\uBB38\uC744 \uC120\uD0DD\uD558\uAC70\uB098 \uC9C1\uC811 \uC785\uB825\uD558\uC138\uC694. \uC120\uD0DD\uB9CC\uC73C\uB85C\uB294 \uC2DC\uAC04\uC774 \uB298\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", body: `<div class="suggestion-list">${hints.length ? hints.map((h) => `<button class="suggestion ${preset === h.question ? "selected" : ""}" type="button" data-suggestion="${esc(h.question)}"><b>${esc(h.name)}</b><br>${esc(h.question)}</button>`).join("") : '<div class="confirm-box">\uB3D9\uB8CC \uC758\uACAC\uC744 \uB4E4\uC73C\uBA74 \uC5EC\uAE30\uC5D0 \uCD94\uCC9C \uC9C8\uBB38\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.</div>'}</div><div class="input-row"><input id="questionInput" maxlength="120" value="${esc(preset)}" placeholder="\uC608: \uB9C8\uD06C\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC740 \uC804\uAE30\uC640 \uAD00\uB828 \uC788\uC2B5\uB2C8\uAE4C?"><button id="questionNext" class="button primary" type="button">\uC9C8\uBB38 \uD655\uC778</button></div><div class="question-log">${state.questions.filter((q) => q.roundNo === round.no).map((q, i) => `<article><small>${i + 1}\uBC88\uC9F8 \uC9C8\uBB38 \xB7 ${esc(q.text)}</small><b>${esc(q.answerText)}</b></article>`).join("") || "<article><small>\uC544\uC9C1 \uC9C8\uBB38\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.</small><b>\uD55C \uBC88\uC5D0 \uD55C \uAC00\uC9C0 \uC0AC\uC2E4\uB9CC \uC9E7\uAC8C \uBB3C\uC5B4\uBCF4\uC138\uC694.</b></article>"}</div>`, actions: [{ label: "\u2190 \uB3D9\uB8CC \uC758\uACAC \uB2E4\uC2DC \uBCF4\uAE30", onClick: openCompanionSelect }, { label: `\u23F3 \uC2DC\uAC04\uC758 \uBC29 ${timeRoomCount(round.no)}/${timeRoomLimit(round.no)}`, onClick: () => openTimeRoom("question") }, { label: "\uB0A8\uC740 \uC9C8\uBB38 \uD3EC\uAE30 \xB7 \uB77C\uC6B4\uB4DC \uC815\uB9AC", disabled: current < 1, onClick: openRoundSummary }] });
    document.querySelectorAll("[data-suggestion]").forEach((el) => el.onclick = () => {
      const input = $("#questionInput");
      input.value = el.dataset.suggestion;
      input.focus();
    });
    $("#questionNext").onclick = () => openQuestionConfirm($("#questionInput").value.trim());
  }
  function openQuestionConfirm(text) {
    if (!text) {
      toast("\uC9C8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694.", true);
      return;
    }
    const round = currentRound();
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uC9C8\uBB38 \uD655\uC815`, title: "\uC774 \uC9C8\uBB38\uC744 \uD655\uC815\uD560\uAE4C\uC694?", lead: "\uD655\uC815\uD558\uBA74 \uAC1C\uC778 \uC2DC\uAC04\uC774 1\uBD84 \uC99D\uAC00\uD558\uACE0, \uCDE8\uC18C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.", body: `<div class="confirm-box"><b>\uC9C8\uBB38</b><br>${esc(text)}<br><br><b>\uBE44\uC6A9</b> \uAC1C\uC778 \uC2DC\uAC04 +1:00</div>`, actions: [{ label: "\uBB38\uC7A5 \uBC14\uAFB8\uAE30", onClick: () => openQuestionSelect(text) }, { label: "\uC9C8\uBB38 \uD655\uC815 \u2192", primary: true, onClick: () => commitQuestion(text) }] });
  }
  async function commitQuestion(text) {
    const round = currentRound();
    setPhase("QUESTION_PENDING");
    setPopupBusy(true, "\uC9D1\uC0AC\uAC00 \uD310\uB2E8\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026");
    let questionId = `demo-${Date.now()}`;
    try {
      const category = await judgeQuestion(text, round.no);
      let answer = category;
      if (state.mode === "server") {
        const reserved = await api.reserve({ attemptId: state.attempt.id, roundNo: round.no, text });
        questionId = reserved.questionId;
        state.attempt.questionCount++;
        state.attempt.totalQuestions++;
        state.attempt.penaltyMs += 6e4;
        notify();
        flashPenalty();
      } else {
        state.attempt.questionCount++;
        state.attempt.totalQuestions++;
        state.attempt.penaltyMs += 6e4;
        notify();
        flashPenalty();
      }
      if (state.mode === "server") {
        const committed = await api.commit({ questionId, answerCategory: category, source: "puter" });
        answer = committed.answerCategory || category;
        applyServerState(committed);
      }
      state.questions.push({ roundNo: round.no, text, category: answer, answerText: answerText[answer] || answerText.MAYBE });
      notify();
      openQuestionResult(text, answer);
    } catch (e) {
      toast(e.message, true);
      openQuestionSelect(text);
    }
  }
  function openQuestionResult(text, category) {
    const round = currentRound();
    const count = state.attempt.questionCount;
    const complete = count >= 3;
    setPhase("QUESTION_RESULT");
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uC9D1\uC0AC\uC758 \uB2F5`, title: answerText[category] || answerText.MAYBE, lead: "\uC9D1\uC0AC\uB294 \uC774\uC720\uB97C \uC124\uBA85\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", body: `<div class="result-box good"><small>\uC9D1\uC0AC \uD310\uC815</small><b>${esc(answerText[category] || answerText.MAYBE)}</b><p>\uC9C8\uBB38 ${count} / 3 \xB7 \uB204\uC801 \uC9C8\uBB38 ${state.attempt.totalQuestions}\uD68C</p></div>`, actions: [{ label: complete ? "\uB77C\uC6B4\uB4DC \uACB0\uACFC \uBCF4\uAE30 \u2192" : "\uB2E4\uC74C \uC9C8\uBB38\uD558\uAE30 \u2192", primary: true, onClick: complete ? openRoundSummary : openQuestionSelect }, { label: complete ? "" : "\uB0A8\uC740 \uC9C8\uBB38 \uD3EC\uAE30", disabled: complete, onClick: openRoundSummary }].filter((a) => a.label) });
  }
  function openRoundSummary() {
    const round = currentRound();
    setPhase("ROUND_SUMMARY");
    const q = state.attempt.questionCount;
    openPopup({ kicker: `ROUND ${round.no} \xB7 \uC870\uC0AC \uC815\uB9AC`, title: `ROUND ${round.no} \uC870\uC0AC\uAC00 \uB05D\uB0AC\uC2B5\uB2C8\uB2E4`, lead: "\uC774\uBC88 \uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uC815\uBCF4\uB97C \uC815\uB9AC\uD569\uB2C8\uB2E4.", body: `<div class="summary-grid"><div><span>\uD655\uC778 \uB2E8\uC11C</span><b>3\uAC1C</b></div><div><span>\uC2DC\uAC04\uC758 \uBC29</span><b>${timeRoomCount(round.no)}\uD68C</b></div><div><span>\uC0AC\uC6A9 \uC9C8\uBB38</span><b>${q}\uD68C</b></div><div><span>\uB204\uC801 \uC2DC\uAC04</span><b>${formatTime(elapsedMs())}</b></div></div>`, actions: [{ label: round.no < 4 ? "\uB2E4\uC74C \uADF8\uB9BC \uACF5\uAC1C \u2192" : "\uCD5C\uC885 \uBC1C\uC758\uB85C \uC774\uB3D9 \u2192", primary: true, onClick: advanceRound }, { label: "\uC0AC\uAC74 \uAE30\uB85D", onClick: openHistory }] });
  }
  async function advanceRound() {
    try {
      if (state.mode === "server") {
        const data = await api.advance({ attemptId: state.attempt.id, roundNo: state.attempt.roundNo });
        applyServerState(data);
      } else {
        if (state.attempt.roundNo < 4) {
          state.attempt.roundNo++;
          state.attempt.questionCount = 0;
          state.attempt.phase = "ROUND_INTRO";
          notify();
        } else {
          setPhase("FINAL_ANSWER");
        }
      }
      if (state.attempt.roundNo > 4 || state.attempt.phase === "FINAL_ANSWER") openFinalAnswer();
      else openRoundIntro();
    } catch (e) {
      toast(e.message, true);
    }
  }
  var finalFields = { victim: "ansVictim", killer: "ansKiller", place: "ansPlace", method: "ansMethod", motive: "ansMotive", truth: "ansTruth" };
  var finalFieldLabels = { victim: "\uD53C\uD574\uC790", killer: "\uAC00\uD574\uC790", place: "\uC7A5\uC18C", method: "\uC0AC\uB9DD \uC6D0\uC778", motive: "\uB3D9\uAE30", truth: "\uC228\uACA8\uC9C4 \uC9C4\uC2E4" };
  function finalHintKey(companionId) {
    return `final:${companionId}`;
  }
  function finalOpinions() {
    return COMPANIONS.map((companion) => state.hints[finalHintKey(companion.id)]).filter(Boolean);
  }
  function syncFinalDraft() {
    for (const [field, id] of Object.entries(finalFields)) {
      const input = $(`#${id}`);
      if (input) state.finalDraft[field] = input.value.slice(0, 240);
    }
    notify();
    return state.finalDraft;
  }
  function bindFinalDraft() {
    for (const [field, id] of Object.entries(finalFields)) {
      const input = $(`#${id}`);
      if (input) input.oninput = () => {
        state.finalDraft[field] = input.value.slice(0, 240);
        notify();
      };
    }
    document.querySelectorAll("[data-final-companion]").forEach((button) => button.onclick = () => openFinalCompanion(button.dataset.finalCompanion));
  }
  function adoptFinalOpinion(companionId) {
    const companion = COMPANIONS.find((item) => item.id === companionId), opinion = state.hints[finalHintKey(companionId)];
    if (!companion || !opinion?.proposal) return;
    for (const field of Object.keys(finalFields)) state.finalDraft[field] = String(opinion.proposal[field] || "").slice(0, 240);
    notify();
    openFinalAnswer();
    toast(`${companion.name}\uC758 \uC758\uACAC\uC73C\uB85C \uBC1C\uC758\uC11C\uB97C \uCC44\uC6E0\uC2B5\uB2C8\uB2E4.`);
  }
  function openFinalAnswer() {
    setPhase("FINAL_ANSWER");
    const heard = new Set(finalOpinions().map((opinion) => opinion.companionId));
    const context = currentFinalContext();
    const companionCards = COMPANIONS.map((companion) => `<button class="companion-button ${heard.has(companion.id) ? "viewed" : ""}" data-final-companion="${companion.id}" type="button"><img src="${companion.image}" alt="${companion.name} \uC77C\uB7EC\uC2A4\uD2B8"><span><b>${companion.name}</b><small>${companion.role}</small><small class="shared-hints">${heard.has(companion.id) ? "\uCD5C\uC885 \uC758\uACAC \uB2E4\uC2DC \uB4E3\uAE30" : `\uACF5\uAC1C \uC815\uBCF4 ${state.attempt.clueIds.length}\uAC1C \xB7 \uBB38\uB2F5 ${context.questionFacts.length}\uAC1C`}</small></span>${heard.has(companion.id) ? '<em class="viewed-badge">\uC758\uACAC \uD655\uC778</em>' : ""}</button>`).join("");
    const draft = state.finalDraft;
    openPopup({ kicker: `\uCD5C\uC885 \uBC1C\uC758 \xB7 \uB3D9\uB8CC \uC758\uACAC ${heard.size}/4`, title: "\uC0AC\uAC74\uC758 \uC804\uB9D0\uC744 \uBC1C\uC758\uD558\uC138\uC694", lead: "\uB3D9\uB8CC\uC5D0\uAC8C \uC9C0\uAE08\uAE4C\uC9C0 \uACF5\uAC1C\uB41C \uC815\uBCF4\uB9CC \uACF5\uC720\uD574 \uCD5C\uC885 \uCD94\uB9AC \uC758\uACAC\uC744 \uB4E4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", body: `<section class="final-team-panel"><div class="final-team-head"><span>\uCD5C\uC885 \uC791\uC804 \uD68C\uC758</span><b>\uC758\uACAC\uC744 \uB4E4\uC744 \uB3D9\uB8CC\uB97C \uC120\uD0DD\uD558\uC138\uC694</b><p>\uB3D9\uB8CC\uC758 \uCD94\uB9AC\uB294 \uC815\uB2F5\uC774 \uC544\uB2C8\uB77C \uACF5\uAC1C \uB2E8\uC11C\uB97C \uBC14\uD0D5\uC73C\uB85C \uD55C \uAC00\uC124\uC785\uB2C8\uB2E4.</p></div><div class="companion-grid">${companionCards}</div></section><div class="answer-grid"><label>\uD53C\uD574\uC790<input id="ansVictim" maxlength="240" value="${esc(draft.victim)}" placeholder="\uB204\uAD6C\uC778\uAC00"></label><label>\uAC00\uD574\uC790<input id="ansKiller" maxlength="240" value="${esc(draft.killer)}" placeholder="\uB204\uAD6C\uC778\uAC00"></label><label>\uC7A5\uC18C<input id="ansPlace" maxlength="240" value="${esc(draft.place)}" placeholder="\uC5B4\uB514\uC778\uAC00"></label><label>\uC0AC\uB9DD \uC6D0\uC778<input id="ansMethod" maxlength="240" value="${esc(draft.method)}" placeholder="\uC5B4\uB5A4 \uBC29\uBC95\uC778\uAC00"></label><label>\uB3D9\uAE30<input id="ansMotive" maxlength="240" value="${esc(draft.motive)}" placeholder="\uC65C \uADF8\uB7AC\uB294\uAC00"></label><label>\uC228\uACA8\uC9C4 \uC9C4\uC2E4<input id="ansTruth" maxlength="240" value="${esc(draft.truth)}" placeholder="\uACFC\uAC70\uC758 \uBE44\uBC00"></label></div>`, actions: [{ label: "\uC0AC\uAC74 \uAE30\uB85D", onClick: () => {
      syncFinalDraft();
      openHistory();
    } }, { label: "\uC815\uB2F5 \uBC1C\uC758 \u2192", primary: true, onClick: submitFinal }] });
    bindFinalDraft();
  }
  async function openFinalCompanion(companionId) {
    syncFinalDraft();
    const companion = COMPANIONS.find((item) => item.id === companionId);
    if (!companion) return;
    const hintKey = finalHintKey(companionId), context = currentFinalContext();
    let opinion = state.hints[hintKey];
    if (opinion && !isValidFinalCompanionOpinion(opinion, companionId)) {
      delete state.hints[hintKey];
      opinion = null;
      notify();
    }
    if (!opinion) {
      setPopupBusy(true, `${companion.name}, \uCD5C\uC885 \uCD94\uB9AC\uB97C \uC815\uB9AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026`);
      try {
        const generated = await finalCompanionOpinion(companionId, context);
        opinion = { ...generated, question: "\uCD5C\uC885 \uBC1C\uC758 \uC870\uC5B8", companionId, name: companion.name };
        state.hints[hintKey] = opinion;
        notify();
      } catch (e) {
        console.warn("[final companion opinion]", companionId, e?.code || "UNKNOWN", e?.reason || e?.message || "");
        setPopupBusy(false);
        const delayed = e?.code === "PUTER_TIMEOUT", unavailable = e?.code === "PUTER_UNAVAILABLE";
        const invalidDetail = !delayed && !unavailable && e?.reason ? `<small class="opinion-delay-reason">\uBC1C\uC758\uC548 \uD655\uC778: ${esc(e.reason)}</small>` : "";
        openPopup({ kicker: `\uCD5C\uC885 \uBC1C\uC758 \xB7 ${companion.name}`, title: delayed ? "\uC758\uACAC \uC815\uB9AC\uAC00 \uC870\uAE08 \uB2A6\uC5B4\uC84C\uC2B5\uB2C8\uB2E4" : unavailable ? "\uB3D9\uB8CC\uC640\uC758 \uC5F0\uACB0\uC774 \uC7A0\uC2DC \uB04A\uACBC\uC2B5\uB2C8\uB2E4" : "\uACF5\uAC1C \uAE30\uB85D\uC744 \uB2E4\uC2DC \uB300\uC870\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4", lead: "\uC791\uC131\uD55C \uCD5C\uC885 \uBC1C\uC758 \uB0B4\uC6A9\uACFC \uC218\uC0AC \uAE30\uB85D\uC740 \uADF8\uB300\uB85C \uC720\uC9C0\uB429\uB2C8\uB2E4.", body: `<div class="confirm-box">${unavailable ? "\uB3D9\uB8CC \uD638\uCD9C \uC5F0\uACB0\uC744 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694." : "\uACF5\uAC1C\uB418\uC9C0 \uC54A\uC740 \uCD94\uCE21\uC740 \uC81C\uC678\uD558\uACE0 \uB2E4\uC2DC \uC758\uACAC\uC744 \uC815\uB9AC\uD569\uB2C8\uB2E4."}${invalidDetail}</div>`, actions: [{ label: "\uB2E4\uC2DC \uC758\uACAC \uB4E3\uAE30 \u2192", primary: true, onClick: () => openFinalCompanion(companionId) }, { label: "\uCD5C\uC885 \uBC1C\uC758\uB85C \uB3CC\uC544\uAC00\uAE30", onClick: openFinalAnswer }] });
        return;
      }
    }
    const sharedRoom = Number(opinion.timeRoomFactCount) || 0, sharedQuestions = Number(opinion.questionFactCount) || 0;
    const proposalHtml = Object.keys(finalFields).map((field) => `<div class="final-proposal-item"><span>${finalFieldLabels[field]}</span><b>${esc(opinion.proposal[field])}</b></div>`).join("");
    openPopup({ kicker: `\uCD5C\uC885 \uC791\uC804 \uD68C\uC758 \xB7 ${companion.name}`, title: `${companion.name}\uC758 \uCD5C\uC885 \uBC1C\uC758\uC548`, lead: `\uACF5\uAC1C \uB2E8\uC11C ${state.attempt.clueIds.length}\uAC1C \xB7 \uC2DC\uAC04\uC758 \uBC29 ${sharedRoom}\uAC1C \xB7 \uC9D1\uC0AC \uB2F5\uBCC0 ${sharedQuestions}\uAC1C\uB97C \uBC14\uD0D5\uC73C\uB85C \uD55C \uCD94\uB9AC\uC785\uB2C8\uB2E4.`, body: `<div class="companion-scene final-companion-scene"><figure class="companion-portrait"><img src="${companion.image}" alt="${companion.name} \uCD08\uC0C1\uD654"><figcaption>${companion.name}<small>${companion.role}</small></figcaption></figure><article class="speech-bubble final-opinion-bubble"><b>${companion.name}</b><small class="speech-shared">\uACF5\uAC1C\uB41C \uC815\uBCF4\uB9CC \uBC18\uC601</small><div class="final-proposal-grid">${proposalHtml}</div><p>${esc(opinion.comment)}</p></article></div>`, actions: [{ label: "\uB2E4\uB978 \uB3D9\uB8CC \uC758\uACAC \uB4E3\uAE30", onClick: openFinalAnswer }, { label: "\uC774 \uC758\uACAC\uC73C\uB85C \uBC1C\uC758\uC11C \uCC44\uC6B0\uAE30 \u2192", primary: true, onClick: () => adoptFinalOpinion(companionId) }] });
  }
  async function submitFinal() {
    syncFinalDraft();
    const answers = Object.fromEntries(Object.entries(state.finalDraft).map(([field, value]) => [field, value.trim()]));
    if (Object.keys(finalFields).some((k) => !answers[k])) {
      toast("\uD53C\uD574\uC790\uBD80\uD130 \uC228\uACA8\uC9C4 \uC9C4\uC2E4\uAE4C\uC9C0 6\uAC1C \uD56D\uBAA9\uC744 \uBAA8\uB450 \uC785\uB825\uD558\uC138\uC694.", true);
      return;
    }
    const evaluation = evaluateFinalAnswers(answers);
    const solved = evaluation.solved;
    try {
      if (state.mode === "server") {
        const data = await api.final({ attemptId: state.attempt.id, answers });
        applyServerState(data);
        state.attempt.completedAt = state.attempt.completedAt || Date.now();
      } else {
        state.attempt.completedAt = Date.now();
        state.attempt.status = "completed";
      }
      state.attempt.solved = solved;
      state.attempt.phase = "ENDING_STORY";
      notify();
      openEnding(0);
    } catch (e) {
      toast(e.message, true);
    }
  }
  function openEnding(index) {
    setPhase("ENDING_STORY");
    const ending = ENDING[index], evaluation = currentEvaluation(), solved = evaluation.solved;
    const evidence = (ending.evidence || []).map((item) => `<span>${esc(item)}</span>`).join("");
    openPopup({ kicker: `\uC0AC\uAC74\uC758 \uB0B4\uB9C9 ${String(index + 1).padStart(2, "0")} / ${String(ENDING.length).padStart(2, "0")}`, title: ending.title, lead: ending.lead, body: `<figure class="ending-frame"><img class="ending-slide active" src="${ending.image}" alt="${esc(ending.title)} \uC7A5\uBA74"><figcaption>\uACB0\uB9D0 \uC7A5\uBA74 ${String(index + 1).padStart(2, "0")}</figcaption></figure><section class="ending-reveal"><span class="ending-label">\uC0AC\uAC74\uC758 \uC804\uB9D0</span><p>${esc(ending.story)}</p><div class="ending-proof-title">\uC774 \uC7A5\uBA74\uC744 \uC785\uC99D\uD55C \uD575\uC2EC \uB2E8\uC11C</div><div class="ending-evidence">${evidence}</div></section>${index === 0 ? `<div class="result-box ${solved ? "good" : "bad"}"><small>\uCD5C\uC885 \uD310\uC815</small><b>${evaluation.score} / 6\uC810 \xB7 ${solved ? "\uC0AC\uAC74 \uD574\uACB0" : "\uBBF8\uD574\uACB0"}</b><p>${solved ? "6\uAC1C \uD575\uC2EC \uD56D\uBAA9\uC744 \uBAA8\uB450 \uC815\uD655\uD788 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4." : `\uC815\uB2F5 ${evaluation.correct}\uAC1C \xB7 \uBD80\uBD84\uC815\uB2F5 ${evaluation.partial}\uAC1C \xB7 \uC624\uB2F5 ${evaluation.wrong}\uAC1C\uC785\uB2C8\uB2E4. \uC804\uCCB4 \uB0B4\uB9C9\uC744 \uD655\uC778\uD55C \uB4A4 \uC0C1\uC138 \uD310\uC815\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.`}</p></div>` : ""}`, actions: [{ label: index < ENDING.length - 1 ? "\uB2E4\uC74C \uB0B4\uB9C9 \uD655\uC778 \u2192" : "\uC0C1\uC138 \uCC44\uC810 \uACB0\uACFC \uBCF4\uAE30 \u2192", primary: true, onClick: () => index < ENDING.length - 1 ? openEnding(index + 1) : openResult() }] });
  }
  function openResult() {
    setPhase("RESULT");
    const evaluation = currentEvaluation(), solved = evaluation.solved;
    state.attempt.solved = solved;
    saveDemoLeader();
    loadLeader();
    const roomTotal = Object.values(state.timeRoomVisits || {}).reduce((sum, value) => sum + Number(value || 0), 0);
    const cloudPanel = cloudReady ? '<section class="cloud-record-panel ready"><span>\uACF5\uC2DD \uB7AD\uD0B9</span><b>Google \uACC4\uC815\uC73C\uB85C \uAE30\uB85D\uC744 \uB0A8\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4</b><p>\uC774 \uC0AC\uAC74\uC740 \uACC4\uC815\uB2F9 \uD55C \uBC88\uB9CC \uB4F1\uB85D\uB418\uBA70, \uB4F1\uB85D \uD6C4 \uAE30\uB85D\uC744 \uBC14\uAFB8\uAC70\uB098 \uB2E4\uC2DC \uC81C\uCD9C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p></section>' : `<section class="cloud-record-panel"><span>\uAE30\uB85D \uC800\uC7A5 \uC0C1\uD0DC</span><b>\uD604\uC7AC \uACB0\uACFC\uB294 \uC774 \uAE30\uAE30\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4</b><p>${esc(firebaseConfigured() ? cloudIssue || "\uACF5\uC2DD \uAE30\uB85D \uBCF4\uAD00\uC18C \uC124\uC815\uC744 \uD655\uC778\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4." : "\uACF5\uC2DD Firebase \uAE30\uB85D \uBCF4\uAD00\uC18C\uAC00 \uC5F0\uACB0\uB418\uAE30 \uC804\uC5D0\uB294 \uC774\uB984\uC774\uB098 \uAE30\uB85D\uC744 \uC11C\uBC84 \uB7AD\uD0B9\uC5D0 \uC62C\uB9AC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")}</p></section>`;
    const actions = [{ label: "\uC804\uCCB4 \uB0B4\uB9C9 \uB2E4\uC2DC \uBCF4\uAE30", onClick: () => openEnding(0) }, { label: "\uB7AD\uD0B9 \uBCF4\uAE30", onClick: openRanking }];
    if (cloudReady) actions.push({ label: "Google\uB85C \uB85C\uADF8\uC778\uD558\uACE0 \uAE30\uB85D \uB4F1\uB85D \u2192", primary: true, onClick: registerCloudRecord });
    else actions[1].primary = true;
    openPopup({ kicker: "\uC0AC\uAC74 \uACB0\uACFC \xB7 \uD56D\uBAA9\uBCC4 \uCC44\uC810", title: solved ? "6\uAC1C \uD575\uC2EC \uD56D\uBAA9\uC744 \uBAA8\uB450 \uB9DE\uD614\uC2B5\uB2C8\uB2E4" : `${evaluation.score} / 6\uC810 \xB7 \uBBF8\uD574\uACB0`, lead: solved ? "\uC0AC\uAC74\uC758 \uC778\uBB3C, \uC7A5\uC18C, \uC6D0\uC778\uACFC \uC228\uACA8\uC9C4 \uC9C4\uC2E4\uC744 \uC815\uD655\uD788 \uC124\uBA85\uD588\uC2B5\uB2C8\uB2E4." : "\uC544\uB798\uC5D0\uC11C \uB9DE\uC740 \uBD80\uBD84\uACFC \uBD80\uC871\uD588\uB358 \uBD80\uBD84\uC744 \uD56D\uBAA9\uBCC4\uB85C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", body: `<div class="result-box ${solved ? "good" : "bad"}"><small>\uCD5C\uC885 \uACB0\uACFC</small><b>${solved ? "\uC0AC\uAC74 \uD574\uACB0" : `${evaluation.score} / 6\uC810`}</b><p>\uC9C4\uD589 \uC2DC\uAC04 ${formatTime(elapsedMs())} \xB7 \uC0AC\uC6A9 \uC9C8\uBB38 ${state.attempt.totalQuestions}\uD68C \xB7 \uC2DC\uAC04\uC758 \uBC29 ${roomTotal}\uD68C</p></div><div class="summary-grid"><div><span>\uC815\uB2F5</span><b>${evaluation.correct}\uAC1C</b></div><div><span>\uBD80\uBD84\uC815\uB2F5</span><b>${evaluation.partial}\uAC1C</b></div><div><span>\uC624\uB2F5</span><b>${evaluation.wrong}\uAC1C</b></div><div><span>\uCD5C\uC885 \uD310\uC815</span><b>${solved ? "\uD574\uACB0" : "\uBBF8\uD574\uACB0"}</b></div></div>${evaluationHtml(evaluation)}${cloudPanel}`, actions });
  }
  async function registerCloudRecord() {
    if (!cloudReady) {
      toast(cloudIssue || "\uACF5\uC2DD \uB7AD\uD0B9 \uC800\uC7A5\uC18C\uAC00 \uC544\uC9C1 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.", true);
      return;
    }
    const evaluation = currentEvaluation();
    const roomTotal = Object.values(state.timeRoomVisits || {}).reduce((sum, value) => sum + Number(value || 0), 0);
    setPopupBusy(true, "Google \uACC4\uC815\uC744 \uD655\uC778\uD558\uACE0 \uACF5\uC2DD \uAE30\uB85D\uC744 \uC811\uC218\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4\u2026");
    try {
      const user = await signInGoogle();
      state.user = { displayName: user.displayName || "\uC775\uBA85 \uD0D0\uC815", firebase: true };
      notify();
      await saveCloudRecord({ score2: evaluation.score2, questionsUsed: state.attempt.totalQuestions, officialTimeMs: elapsedMs(), timeRoomVisits: roomTotal });
      await loadLeader();
      setPopupBusy(false);
      toast("\uACF5\uC2DD \uB7AD\uD0B9\uC5D0 \uAE30\uB85D\uC744 \uB4F1\uB85D\uD588\uC2B5\uB2C8\uB2E4.");
      openRanking();
    } catch (error) {
      setPopupBusy(false);
      toast(cloudErrorMessage(error), true);
      if (error?.code === "ALREADY_RECORDED") openRanking();
    }
  }
  async function openRanking() {
    let list = [], source = "local", loadError = "";
    if (firebaseConfigured()) {
      try {
        if (!await firebaseDomainAuthorized()) {
          const error = new Error("\uC2B9\uC778 \uB3C4\uBA54\uC778 \uB204\uB77D");
          error.code = "AUTH_DOMAIN_MISSING";
          throw error;
        }
        list = await loadCloudRankings();
        source = "firebase";
        cloudReady = true;
        cloudIssue = "";
      } catch (e) {
        loadError = cloudErrorMessage(e);
        cloudReady = false;
        cloudIssue = loadError;
      }
    }
    if (source === "local") {
      const local = readDemoLeader();
      if (local) list = [{ rank: 1, displayName: local.name, score2: local.score2, questionsUsed: local.questions, officialTimeMs: local.timeMs, isLocal: true }];
    }
    const rows = list.map((record, index) => `<div class="rank-row ${record.isMine ? "me" : ""}"><b>${record.rank || index + 1}\uC704</b><span>${esc(record.displayName || record.name || "\uC775\uBA85 \uD0D0\uC815")}<small>${(Number(record.score2) || 0) / 2}/6\uC810${record.isLocal ? " \xB7 \uC774 \uAE30\uAE30" : ""}${record.isMine ? " \xB7 \uB098" : ""}</small></span><span>\uC9C8\uBB38 ${record.questionsUsed ?? record.questions ?? 0}</span><span>${formatTime(record.officialTimeMs ?? record.timeMs ?? 0)}</span></div>`).join("");
    const warning = loadError ? `<div class="confirm-box">${esc(loadError)} \uD604\uC7AC\uB294 \uC774 \uAE30\uAE30\uC758 \uAE30\uB85D\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4.</div>` : "";
    const empty = source === "firebase" ? '<div class="confirm-box">\uC544\uC9C1 \uB4F1\uB85D\uB41C \uACF5\uC2DD \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uD0D0\uC815\uC774 \uB418\uC5B4 \uBCF4\uC138\uC694.</div>' : '<div class="confirm-box">\uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB41C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uD45C\uC2DC\uC6A9 \uAC00\uC9DC \uC21C\uC704\uB294 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</div>';
    const lead = source === "firebase" ? "Firebase\uC5D0 \uC2E4\uC81C \uB4F1\uB85D\uB41C \uAE30\uB85D\uC785\uB2C8\uB2E4. \uC810\uC218 \u2192 \uC9C8\uBB38 \uC218 \u2192 \uC9C4\uD589 \uC2DC\uAC04 \uC21C\uC73C\uB85C \uC815\uB82C\uD569\uB2C8\uB2E4." : "\uD604\uC7AC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC758 \uAC1C\uC778 \uAE30\uB85D\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC11C\uBC84\uC5D0 \uB4F1\uB85D\uB41C \uACF5\uC2DD \uB7AD\uD0B9\uC774 \uC544\uB2D9\uB2C8\uB2E4.";
    const actions = [{ label: "\uBA54\uC778\uC73C\uB85C", primary: !cloudReady, onClick: () => {
      closePopup();
      renderDashboard();
    } }];
    if (cloudReady && state.attempt.status === "completed") actions.push({ label: "\uB0B4 \uAE30\uB85D \uB4F1\uB85D \u2192", primary: true, onClick: registerCloudRecord });
    openPopup({ kicker: `\uCCAB \uBC88\uC9F8 \uC0AC\uAC74 \xB7 ${source === "firebase" ? "\uACF5\uC2DD \uAE30\uB85D" : "\uAC1C\uC778 \uAE30\uB85D"}`, title: "\uB7AD\uD0B9", lead, body: `${warning}<div class="rank-list">${rows || empty}</div>`, actions, dismissible: true });
  }
  function revealedPhotoRounds() {
    if (state.attempt.status === "completed") return ROUNDS;
    const beforeImage = ["CASE_HOME", "CASE_START", "ROUND_INTRO"].includes(state.attempt.phase);
    const count = Math.max(0, state.attempt.roundNo - (beforeImage ? 1 : 0));
    return ROUNDS.slice(0, count);
  }
  function openHistory() {
    const clueIds = state.attempt.clueIds;
    const photos = revealedPhotoRounds().map((r) => `<button class="history-image-card" type="button" data-history-image="${r.no}"><img src="${r.image}" alt="ROUND ${r.no} ${esc(r.title)}"><span><small>ROUND ${r.no}</small><b>${esc(r.title)}</b><em>\uC0AC\uC9C4 \uB2E4\uC2DC \uBCF4\uAE30 \u2192</em></span></button>`).join("");
    const clues = ROUNDS.slice(0, state.attempt.roundNo).flatMap((r) => r.clues.filter((c) => clueIds.includes(c.id)).map((c) => `<article><small>ROUND ${r.no} \xB7 ${esc(c.title)}</small><b>${esc(c.text)}</b></article>`));
    const roomHints = ROUNDS.flatMap((r) => (TIME_ROOM_HINTS[r.no] || []).slice(0, timeRoomCount(r.no)).map((hint, i) => `<article class="time-record"><small>ROUND ${r.no} \xB7 \uC2DC\uAC04\uC758 \uBC29 \uCD94\uAC00 \uC815\uBCF4 ${i + 1}</small><b>${esc(hint)}</b></article>`));
    const questions = state.questions.map((x) => `<article><small>ROUND ${x.roundNo} \xB7 ${esc(x.text)}</small><b>${esc(x.answerText)}</b></article>`);
    openPopup({ kicker: "\uC218\uC0AC \uAE30\uB85D", title: "\uC0AC\uAC74 \uAE30\uB85D", lead: "\uC9C0\uAE08\uAE4C\uC9C0 \uACF5\uAC1C\uB41C \uC0AC\uC9C4\uACFC \uC815\uBCF4\uB9CC \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.", body: `<section class="history-photo-section"><h3>\uACF5\uAC1C\uB41C \uD604\uC7A5 \uC0AC\uC9C4</h3>${photos ? `<div class="history-images">${photos}</div>` : '<div class="confirm-box">\uC544\uC9C1 \uACF5\uAC1C\uB41C \uD604\uC7A5 \uC0AC\uC9C4\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>'}</section><div class="question-log"><article><small>\uACF5\uAC1C \uC0AC\uAC74 \uAC1C\uC694</small><b>${esc(CASE_OVERVIEW)}</b></article>${clues.length ? clues.join("") : "<article><small>\uD604\uC7A5 \uB2E8\uC11C</small><b>\uC544\uC9C1 \uD655\uC778\uD55C \uB2E8\uC11C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</b></article>"}${roomHints.join("")}${questions.length ? questions.join("") : "<article><small>\uC9D1\uC0AC \uD310\uC815</small><b>\uC544\uC9C1 \uC9C8\uBB38 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</b></article>"}</div>`, actions: [{ label: "\uD604\uC7AC \uC9C4\uD589\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30", primary: true, onClick: openByPhase }], dismissible: true });
    document.querySelectorAll("[data-history-image]").forEach((button) => button.onclick = () => openHistoryImage(Number(button.dataset.historyImage)));
  }
  function openHistoryImage(roundNo) {
    const round = revealedPhotoRounds().find((item) => item.no === roundNo);
    if (!round) {
      toast("\uC544\uC9C1 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC740 \uC0AC\uC9C4\uC785\uB2C8\uB2E4.", true);
      return;
    }
    openPopup({ kicker: `\uC0AC\uAC74 \uAE30\uB85D \xB7 ROUND ${round.no}`, title: round.title, lead: "\uC774\uBBF8 \uACF5\uAC1C\uB41C \uC0AC\uC9C4\uC785\uB2C8\uB2E4. \uB2E4\uC2DC \uBD10\uB3C4 \uC2DC\uAC04\uC774\uB098 \uC9C8\uBB38 \uC218\uB294 \uB298\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", body: imageHtml(round, false), actions: [{ label: "\u2190 \uC0AC\uAC74 \uAE30\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30", onClick: openHistory }, { label: "\uD604\uC7AC \uC218\uC0AC\uB85C \uB3CC\uC544\uAC00\uAE30 \u2192", primary: true, onClick: openByPhase }], dismissible: true });
  }
  function openByPhase() {
    switch (state.attempt.phase) {
      case "CASE_HOME":
      case "CASE_START":
        return openCaseStart();
      case "ROUND_INTRO":
        return openRoundIntro();
      case "IMAGE_REVEAL":
        return openImage();
      case "CLUE_SELECT":
      case "CLUE_RESULT":
        return openClueSelect();
      case "COMPANION_SELECT":
      case "COMPANION_RESULT":
        return openCompanionSelect();
      case "QUESTION_SELECT":
      case "QUESTION_PENDING":
      case "QUESTION_RESULT":
        return openQuestionSelect();
      case "ROUND_SUMMARY":
        return openRoundSummary();
      case "FINAL_ANSWER":
        return openFinalAnswer();
      case "ENDING_STORY":
        return openEnding(0);
      case "RESULT":
        return openResult();
      default:
        return openCaseStart();
    }
  }
  function applyServerState(data) {
    if (data.user) state.user = data.user;
    if (data.attempt) {
      Object.assign(state.attempt, data.attempt);
      if (state.attempt.startedAt && typeof state.attempt.startedAt === "string") {
        const parsed = Date.parse(state.attempt.startedAt);
        if (!Number.isNaN(parsed)) state.attempt.startedAt = parsed;
      }
    }
    if (Array.isArray(data.clueIds)) state.attempt.clueIds = data.clueIds;
    if (data.hints) state.hints = data.hints;
    if (data.timeRoomVisits) state.timeRoomVisits = data.timeRoomVisits;
    if (Array.isArray(data.questions)) {
      state.questions = data.questions.map((q) => ({ ...q, answerText: answerText[q.category] || q.answerText || answerText.MAYBE }));
      state.attempt.totalQuestions = state.questions.length;
      state.attempt.questionCount = state.questions.filter((q) => q.roundNo === state.attempt.roundNo).length;
    }
    notify();
  }
  async function boot() {
    $("#historyButton").onclick = openHistory;
    $("#rankingButton").onclick = openRanking;
    ensurePuter();
    try {
      const status = await api.status();
      state.config = status.config || state.config;
      state.user = status.user || null;
      if (!state.config.ready) state.mode = "demo";
      if (status.attempt) Object.assign(state.attempt, status.attempt);
      if (state.config.googleClientId) {
        const s = document.createElement("script");
        s.src = "https://accounts.google.com/gsi/client";
        s.async = true;
        s.onload = () => state.config.googleClientId && window.google.accounts.id.initialize({ client_id: state.config.googleClientId, callback: window.handleGoogleCredential });
        document.head.append(s);
      }
      if (state.user && state.attempt.status === "in_progress") {
        const serverState = await api.state();
        applyServerState(serverState);
      }
    } catch {
      state.mode = "demo";
    }
    const restored = state.mode === "demo" && restoreLocalProgress();
    await loadLeader();
    renderDashboard();
    if (restored) {
      openByPhase();
      toast("\uC800\uC7A5\uB41C \uC218\uC0AC \uAE30\uB85D\uC5D0\uC11C \uC774\uC5B4\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4.");
    }
  }
  setInterval(renderHud, 1e3);
  boot();
})();
