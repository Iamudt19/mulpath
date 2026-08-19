import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'HI' | 'MR' | 'TE';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'HI', label: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'MR', label: 'मराठी (Marathi)', flag: '🇮🇳' },
  { code: 'TE', label: 'తెలుగు (Telugu)', flag: '🇮🇳' },
];

export const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Nav
    'nav.home': 'Home',
    'nav.collector': 'Collector',
    'nav.aggregator': 'Aggregator',
    'nav.lab': 'Quality Lab',
    'nav.manufacturer': 'Manufacturer',
    'nav.verify': 'Verify',
    'nav.admin': 'Admin & Ops',
    'nav.review_queue': 'Review Queue',
    'nav.login': 'Stakeholder Login',
    'nav.switch': 'Switch',
    'nav.logout': 'Logout',
    'nav.network': 'Network',
    'nav.sepolia': 'Sepolia Testnet',
    'nav.language': 'Language',

    // Titles
    'title.home': 'Ayurvedic Botanical Traceability Platform',
    'title.collector': 'Collector Field Portal',
    'title.aggregator': 'Aggregator Mandi Hub',
    'title.lab': 'NABL Quality & Assay Testing Lab',
    'title.manufacturer': 'Manufacturer Formulation Portal',
    'title.verify': 'Consumer Chain Verification',
    'title.admin': 'Protocol Operations & Admin',

    // Auth Modal
    'auth.title': 'Stakeholder Authentication',
    'auth.subtitle': 'Log in to your verified supply chain role',
    'auth.phone_tab': 'Mobile Number',
    'auth.email_tab': 'Email Address',
    'auth.phone_placeholder': '9876543210',
    'auth.email_placeholder': 'stakeholder@ayush.org',
    'auth.send_otp': 'Send Verification Code',
    'auth.enter_otp': 'Enter 6-Digit Verification Code',
    'auth.otp_sent_to': 'Verification code dispatched to',
    'auth.verify_btn': 'Verify & Access Portal',
    'auth.resend': 'Resend Code',
    'auth.name_optional': 'Your Name / Org Name (Optional)',
    'auth.dev_code_hint': 'Testing Code: 123456 or the code shown below',

    // Collector Dashboard
    'collector.harvest_now': '🌿 Log New Harvest',
    'collector.wallet': 'Collector Wallet',
    'collector.my_harvests': 'My Harvest Batches',
    'collector.step_gps': '1. GPS Zone Validation',
    'collector.step_camera': '2. Live Botanical AI Camera',
    'collector.step_nfc': '3. NFC/QR Bag Seal & Weight',
    'collector.step_review': '4. Review & Blockchain Mint',
    'collector.select_aggregator': 'Assign Target Mandi Hub / Aggregator',
    'collector.select_aggregator_placeholder': '-- Choose Mandi Hub --',
    'collector.weight_kg': 'Harvest Weight (kg)',
    'collector.notes': 'Collector Notes (Optional)',
    'collector.seal_id': 'Tamper Seal / Bag NFC Tag ID',
    'collector.submit_blockchain': '⛓️ Anchor Harvest on Blockchain',
    'collector.offline_saved': 'Saved to offline queue',
    'collector.withdraw_btn': 'Withdraw Funds (UPI / Bank)',

    // Aggregator Dashboard
    'aggregator.title': 'Regional Mandi Aggregation Hub',
    'aggregator.tab_scan': 'Scan & Accept Bag',
    'aggregator.tab_accepted': 'Accepted Harvest Bags',
    'aggregator.tab_merge': 'Merge & Dispatch to Lab',
    'aggregator.tab_lots': 'Aggregated Lots',
    'aggregator.accept_pay': 'Accept & Release Escrow Payment',
    'aggregator.target_lab': 'Assign Target Quality Lab',
    'aggregator.target_lab_placeholder': '-- Choose NABL Accredited Lab --',
    'aggregator.dispatch_btn': 'Dispatch Lot to Lab',

    // Lab Dashboard
    'lab.title': 'NABL Testing & Chemical Assay',
    'lab.tab_pending': 'Pending Inspection',
    'lab.tab_certificates': 'Certified Batches',
    'lab.chemical_assay': 'Chemical & HPLC Assay',
    'lab.purity_percent': 'Active Compound Purity (%)',
    'lab.pass_btn': 'Issue On-Chain Certificate (PASS)',
    'lab.fail_btn': 'Reject Sample (FAIL)',

    // Manufacturer Dashboard
    'mfg.title': 'AYUSH Enterprise Formulation Hub',
    'mfg.tab_marketplace': 'Browse Tested Lots',
    'mfg.tab_formulate': 'Formulation Builder',
    'mfg.tab_qr': 'Master QR & Label Packaging',
    'mfg.tab_history': 'Registered Batches',
    'mfg.product_name': 'Product Formulation Name',
    'mfg.batch_units': 'Batch Units (e.g. 250 bottles)',
    'mfg.retail_price': 'Retail Price per Unit (₹)',
    'mfg.farmer_share': 'Real On-Chain Farmer Share',
    'mfg.register_formulation': '⛓️ Register Formulation & Generate Dynamic Master QR',
    'mfg.download_qr': 'Download QR Code PNG',
    'mfg.print_labels': 'Print QR Label Sheet',
    'mfg.view_verify': 'Test Scan & View Verification Passport ➔',

    // Admin Dashboard
    'admin.title': 'Mūlpath Protocol Operations & Registry',
    'admin.tab_overview': 'Protocol Overview',
    'admin.tab_users': 'Registered Stakeholders',
    'admin.tab_products': 'Verified Products & Formulations',
    'admin.tab_batches': 'All Batches',
    'admin.tab_zones': 'Approved Forest Zones',
    'admin.tab_fraud': 'Ops Flagged Queue',
    'admin.tab_blockchain': 'Blockchain Explorer',
    'admin.total_farmers': 'Total Collectors',
    'admin.total_kg': 'Harvested Volume',
    'admin.total_payouts': 'Escrow Released',
    'admin.total_products': 'Verified Formulations',

    // Verify Page
    'verify.title': 'Chain of Custody & Fair-Trade Verification',
    'verify.subtitle': 'Scan or enter product serialization ID to verify authentic origin',
    'verify.search_placeholder': 'Enter Formulation / Batch ID (e.g. 1, BATCH-MFG-1)',
    'verify.search_btn': 'Verify Provenance',
    'verify.purity_guarantee': '100% Tested Authentic AYUSH Botanical Specimen',
    'verify.farmer_share_card': 'Farmer Fair-Trade Direct Payout',
    'verify.timeline_title': 'Cryptographic Chain of Custody Timeline',
    'verify.report_btn': 'Report Counterfeit / Damaged Seal',
  },

  HI: {
    // Nav
    'nav.home': 'होम',
    'nav.collector': 'संग्राहक (कलेक्टर)',
    'nav.aggregator': 'मंडी एग्रीगेटर',
    'nav.lab': 'गुणवत्ता लैब',
    'nav.manufacturer': 'निर्माता (मैन्युफैक्चरर)',
    'nav.verify': 'सत्यापन (वेरीफाई)',
    'nav.admin': 'एडमिन व ऑप्स',
    'nav.review_queue': 'रिव्यू कतार',
    'nav.login': 'लॉग इन करें',
    'nav.switch': 'बदलें',
    'nav.logout': 'लॉग आउट',
    'nav.network': 'नेटवर्क',
    'nav.sepolia': 'सेपोलिया टेस्टनेट',
    'nav.language': 'भाषा',

    // Titles
    'title.home': 'आयुर्वेदिक वनस्पति ब्लॉकचेन ट्रैसेबिलिटी',
    'title.collector': 'वन संग्राहक व किसान पोर्टल',
    'title.aggregator': 'मंडी हब व एग्रीगेटर',
    'title.lab': 'NABL मान्यता प्राप्त लैब',
    'title.manufacturer': 'आयुष निर्माण व फॉर्मूलेशन पोर्टल',
    'title.verify': 'उपभोक्ता श्रृंखला सत्यापन',
    'title.admin': 'प्रोटोकॉल प्रशासन व ऑपरेशंस',

    // Auth Modal
    'auth.title': 'हितधारक प्रमाणीकरण',
    'auth.subtitle': 'सत्यापित सप्लाई चेन खाते में लॉगिन करें',
    'auth.phone_tab': 'मोबाइल नंबर',
    'auth.email_tab': 'ईमेल आईडी',
    'auth.phone_placeholder': '9876543210',
    'auth.email_placeholder': 'stakeholder@ayush.org',
    'auth.send_otp': 'सत्यापन कोड (OTP) भेजें',
    'auth.enter_otp': '6-अंकीय OTP कोड दर्ज करें',
    'auth.otp_sent_to': 'सत्यापन कोड भेजा गया:',
    'auth.verify_btn': 'सत्यापित करें व प्रवेश करें',
    'auth.resend': 'OTP पुनः भेजें',
    'auth.name_optional': 'आपका नाम / संस्था का नाम (वैकल्पिक)',
    'auth.dev_code_hint': 'परीक्षण कोड: 123456 या नीचे प्रदर्शित कोड',

    // Collector Dashboard
    'collector.harvest_now': '🌿 नई फसल / उपज दर्ज करें',
    'collector.wallet': 'कलेक्टर डिजिटल वॉलेट',
    'collector.my_harvests': 'मेरे हार्वेस्ट बैच',
    'collector.step_gps': '१. जीपीएस जियोफेंसिंग सत्यापन',
    'collector.step_camera': '२. लाइव वनस्पति एआई कैमरा',
    'collector.step_nfc': '३. एनएफसी सील व वजन (किलो)',
    'collector.step_review': '४. समीक्षा व ब्लॉकचेन मिंट',
    'collector.select_aggregator': 'लक्षित मंडी हब / एग्रीगेटर चुनें',
    'collector.select_aggregator_placeholder': '-- मंडी हब चुनें --',
    'collector.weight_kg': 'उपज का वजन (किलो)',
    'collector.notes': 'कलेक्टर विवरण (वैकल्पिक)',
    'collector.seal_id': 'बैग सील / एनएफसी टैग संख्या',
    'collector.submit_blockchain': '⛓️ ब्लॉकचेन पर सुरक्षित दर्ज करें',
    'collector.offline_saved': 'ऑफ़लाइन कतार में सहेजा गया',
    'collector.withdraw_btn': 'पैसे निकालें (UPI / बैंक)',

    // Aggregator Dashboard
    'aggregator.title': 'क्षेत्रीय मंडी एकत्रीकरण केंद्र',
    'aggregator.tab_scan': 'बैग स्कैन करें व स्वीकारें',
    'aggregator.tab_accepted': 'स्वीकृत फसल बैग',
    'aggregator.tab_merge': 'बैच मिलाएं व लैब भेजें',
    'aggregator.tab_lots': 'एकत्रित लॉट',
    'aggregator.accept_pay': 'स्वीकार करें व एस्क्रो भुगतान जारी करें',
    'aggregator.target_lab': 'लक्षित गुणवत्ता लैब चुनें',
    'aggregator.target_lab_placeholder': '-- NABL लैब चुनें --',
    'aggregator.dispatch_btn': 'लॉट को लैब में भेजें',

    // Lab Dashboard
    'lab.title': 'NABL गुणवत्ता व रासायनिक परीक्षण',
    'lab.tab_pending': 'निरीक्षण हेतु लंबित',
    'lab.tab_certificates': 'प्रमाणित बैच',
    'lab.chemical_assay': 'एचपीएलसी (HPLC) रासायनिक जांच',
    'lab.purity_percent': 'सक्रिय यौगिक शुद्धता (%)',
    'lab.pass_btn': 'ब्लॉकचेन प्रमाण पत्र जारी करें (पास)',
    'lab.fail_btn': 'नमूना अस्वीकार करें (फेल)',

    // Manufacturer Dashboard
    'mfg.title': 'आयुष निर्माण एवं फॉर्मूलेशन केंद्र',
    'mfg.tab_marketplace': 'प्रमाणित लॉट देखें',
    'mfg.tab_formulate': 'फॉर्मूलेशन निर्माता',
    'mfg.tab_qr': 'मास्टर क्यूआर व लेबल पैकेजिंग',
    'mfg.tab_history': 'पंजीकृत बैच',
    'mfg.product_name': 'उत्पाद फॉर्मूलेशन का नाम',
    'mfg.batch_units': 'बैच इकाइयाँ (उदा. 250 बोतलें)',
    'mfg.retail_price': 'प्रति बोतल खुदरा मूल्य (₹)',
    'mfg.farmer_share': 'किसानों को मिला वास्तविक हिस्सा',
    'mfg.register_formulation': '⛓️ फॉर्मूलेशन दर्ज करें व डायनामिक मास्टर क्यूआर बनाएं',
    'mfg.download_qr': 'क्यूआर कोड (PNG) डाउनलोड करें',
    'mfg.print_labels': 'क्यूआर लेबल शीट प्रिंट करें',
    'mfg.view_verify': 'स्कैन टेस्ट करें व सत्यापन देखें ➔',

    // Admin Dashboard
    'admin.title': 'मूलपथ प्रोटोकॉल प्रशासन व रजिस्ट्री',
    'admin.tab_overview': 'प्रोटोकॉल समीक्षा',
    'admin.tab_users': 'पंजीकृत हितधारक',
    'admin.tab_products': 'सत्यापित उत्पाद व फॉर्मूलेशन',
    'admin.tab_batches': 'समस्त बैच',
    'admin.tab_zones': 'अनुमोदित वन क्षेत्र',
    'admin.tab_fraud': 'संदेहास्पद कतार',
    'admin.tab_blockchain': 'ब्लॉकचेन एक्सप्लोरर',
    'admin.total_farmers': 'कुल संग्राहक व किसान',
    'admin.total_kg': 'कुल एकत्रित वजन',
    'admin.total_payouts': 'जारी एस्क्रो भुगतान',
    'admin.total_products': 'सत्यापित फॉर्मूलेशन',

    // Verify Page
    'verify.title': 'उत्पाद प्रामाणिकता व उचित व्यापार सत्यापन',
    'verify.subtitle': 'सच्चे स्रोत की जांच के लिए उत्पाद क्यूआर या सीरियल आईडी दर्ज करें',
    'verify.search_placeholder': 'फॉर्मूलेशन या बैच आईडी दर्ज करें (उदा. 1, BATCH-MFG-1)',
    'verify.search_btn': 'स्रोत सत्यापित करें',
    'verify.purity_guarantee': '१००% लैब परीक्षित प्रामाणिक आयुर्वेदिक वनस्पति',
    'verify.farmer_share_card': 'किसान / संग्राहक को सीधा भुगतान हिस्सा',
    'verify.timeline_title': 'ब्लॉकचेन आपूर्ति श्रृंखला समयरेखा (Timeline)',
    'verify.report_btn': 'नकली / टूटी हुई सील की रिपोर्ट करें',
  },

  MR: {
    // Nav
    'nav.home': 'मुख्यपृष्ठ',
    'nav.collector': 'संग्राहक (शेतकरी)',
    'nav.aggregator': 'मंडी अ‍ॅग्रीगेटर',
    'nav.lab': 'गुणवत्ता लॅब',
    'nav.manufacturer': 'उत्पादक (मॅन्युफॅक्चरर)',
    'nav.verify': 'पडताळणी (व्हेरिफाय)',
    'nav.admin': 'अ‍ॅडमिन व ऑप्स',
    'nav.review_queue': 'पुनरावलोकन रांग',
    'nav.login': 'लॉग इन करा',
    'nav.switch': 'बदला',
    'nav.logout': 'लॉग आउट',
    'nav.network': 'नेटवर्क',
    'nav.sepolia': 'सेपोलिया टेस्टनेट',
    'nav.language': 'भाषा',

    // Titles
    'title.home': 'आयुर्वेदिक वनौषधी ब्लॉकचेन पारदर्शकता प्लॅटफॉर्म',
    'title.collector': 'वन संग्राहक व शेतकरी पोर्टल',
    'title.aggregator': 'मंडी केंद्र व अ‍ॅग्रीगेटर',
    'title.lab': 'NABL गुणवत्ता चाचणी लॅब',
    'title.manufacturer': 'आयुष उत्पादन व फॉर्म्युलेशन पोर्टल',
    'title.verify': 'ग्राहक पुरवठा साखळी पडताळणी',
    'title.admin': 'प्रोटोकॉल ऑपरेशन्स व अ‍ॅडमिन',

    // Auth Modal
    'auth.title': 'हितधारक प्रमाणीकरण',
    'auth.subtitle': 'आपल्या पुरवठा साखळी खात्यात लॉगिन करा',
    'auth.phone_tab': 'मोबाईल नंबर',
    'auth.email_tab': 'ईमेल आयडी',
    'auth.phone_placeholder': '9876543210',
    'auth.email_placeholder': 'stakeholder@ayush.org',
    'auth.send_otp': 'सत्यापन कोड (OTP) पाठवा',
    'auth.enter_otp': '६-अंकी OTP कोड टाका',
    'auth.otp_sent_to': 'सत्यापन कोड पाठविला:',
    'auth.verify_btn': 'सत्यापित करा व प्रवेश करा',
    'auth.resend': 'OTP पुन्हा पाठवा',
    'auth.name_optional': 'आपले नाव / संस्थेचे नाव (पर्यायी)',
    'auth.dev_code_hint': 'चाचणी कोड: 123456 किंवा खाली दिलेला कोड',

    // Collector Dashboard
    'collector.harvest_now': '🌿 नवीन पीक / वनस्पती नोंदवा',
    'collector.wallet': 'कलेक्टर डिजिटल वॉलेट',
    'collector.my_harvests': 'माझी नोंदवलेली पिके',
    'collector.step_gps': '१. जीपीएस जिओफेन्सिंग पडताळणी',
    'collector.step_camera': '२. थेट वनस्पती AI कॅमेरा',
    'collector.step_nfc': '३. NFC सील व वजन (किलो)',
    'collector.step_review': '४. आढावा व ब्लॉकचेन नोंद',
    'collector.select_aggregator': 'लक्षित मंडी केंद्र / अ‍ॅग्रीगेटर निवडा',
    'collector.select_aggregator_placeholder': '-- मंडी केंद्र निवडा --',
    'collector.weight_kg': 'पिकाचे वजन (किलो)',
    'collector.notes': 'नोंदी (पर्यायी)',
    'collector.seal_id': 'बॅग सील / NFC टॅग आयडी',
    'collector.submit_blockchain': '⛓️ ब्लॉकचेनवर सुरक्षित नोंद करा',
    'collector.offline_saved': 'ऑफलाइन रांगेत जतन केले',
    'collector.withdraw_btn': 'रक्कम काढा (UPI / बँक)',

    // Aggregator Dashboard
    'aggregator.title': 'प्रादेशिक मंडी संकलन केंद्र',
    'aggregator.tab_scan': 'बॅग स्कॅन करा व स्वीकारा',
    'aggregator.tab_accepted': 'स्वीकारलेल्या पिशव्या',
    'aggregator.tab_merge': 'एकत्र करा व लॅबला पाठवा',
    'aggregator.tab_lots': 'एकत्रित लॉट',
    'aggregator.accept_pay': 'स्वीकारा व एस्क्रो पेमेंट पाठवा',
    'aggregator.target_lab': 'लक्षित गुणवत्ता लॅब निवडा',
    'aggregator.target_lab_placeholder': '-- NABL लॅब निवडा --',
    'aggregator.dispatch_btn': 'लॉट लॅबकडे पाठवा',

    // Lab Dashboard
    'lab.title': 'NABL गुणवत्ता व रासायनिक चाचणी',
    'lab.tab_pending': 'तपासणीसाठी प्रलंबित',
    'lab.tab_certificates': 'प्रमाणित बॅचेस',
    'lab.chemical_assay': 'HPLC रासायनिक तपासणी',
    'lab.purity_percent': 'सक्रिय घटक शुद्धता (%)',
    'lab.pass_btn': 'ब्लॉकचेन प्रमाणपत्र जारी करा (पास)',
    'lab.fail_btn': 'नमुना नाकारा (नापास)',

    // Manufacturer Dashboard
    'mfg.title': 'आयुष उत्पादन व फॉर्म्युलेशन केंद्र',
    'mfg.tab_marketplace': 'प्रमाणित लॉट पहा',
    'mfg.tab_formulate': 'फॉर्म्युलेशन बिल्डर',
    'mfg.tab_qr': 'मास्टर क्यूआर व पॅकेजिंग लेबल्स',
    'mfg.tab_history': 'नोंदणीकृत बॅचेस',
    'mfg.product_name': 'उत्पादन फॉर्म्युलेशन नाव',
    'mfg.batch_units': 'बॅच युनिट्स (उदा. 250 बाटल्या)',
    'mfg.retail_price': 'किरकोळ किंमत (₹)',
    'mfg.farmer_share': 'शेतकऱ्यांना मिळालेला खरा वाटा',
    'mfg.register_formulation': '⛓️ फॉर्म्युलेशन नोंदवा व मास्टर क्यूआर तयार करा',
    'mfg.download_qr': 'क्यूआर कोड (PNG) डाउनलोड करा',
    'mfg.print_labels': 'क्यूआर लेबल्स प्रिंट करा',
    'mfg.view_verify': 'चाचणी स्कॅन करा व पडताळणी पहा ➔',

    // Admin Dashboard
    'admin.title': 'मूलपथ प्रोटोकॉल ऑपरेशन्स व रजिस्ट्री',
    'admin.tab_overview': 'प्रोटोकॉल आढावा',
    'admin.tab_users': 'नोंदणीकृत हितधारक',
    'admin.tab_products': 'प्रमाणित उत्पादने व फॉर्म्युलेशन्स',
    'admin.tab_batches': 'सर्व बॅचेस',
    'admin.tab_zones': 'मान्यताप्राप्त वन क्षेत्रे',
    'admin.tab_fraud': 'संशयित यादी',
    'admin.tab_blockchain': 'ब्लॉकचेन एक्सप्लोरर',
    'admin.total_farmers': 'एकूण शेतकरी व संग्राहक',
    'admin.total_kg': 'एकूण गोळा केलेले वजन',
    'admin.total_payouts': 'वितरित एस्क्रो रक्कम',
    'admin.total_products': 'प्रमाणित फॉर्म्युलेशन्स',

    // Verify Page
    'verify.title': 'उत्पादन सत्यता व रास्त व्यापार पडताळणी',
    'verify.subtitle': 'सत्यता तपासण्यासाठी उत्पादन क्यूआर किंवा बॅच आयडी टाका',
    'verify.search_placeholder': 'फॉर्म्युलेशन किंवा बॅच आयडी टाका (उदा. 1, BATCH-MFG-1)',
    'verify.search_btn': 'सत्यता तपासा',
    'verify.purity_guarantee': '१००% लॅब चाचणी उत्तीर्ण खरी आयुर्वेदिक वनौषधी',
    'verify.farmer_share_card': 'शेतकरी / संग्राहकाला थेट मिळालेला हिस्सा',
    'verify.timeline_title': 'ब्लॉकचेन पुरवठा साखळी टाइमलाइन',
    'verify.report_btn': 'बनावट / तुटलेली सील तक्रार करा',
  },

  TE: {
    // Nav
    'nav.home': 'హోమ్',
    'nav.collector': 'సేకరణదారుడు (రైతు)',
    'nav.aggregator': 'మండీ అగ్రిగేటర్',
    'nav.lab': 'క్వాలిటీ ల్యాబ్',
    'nav.manufacturer': 'తయారీదారు (మాన్యుఫ్యాక్చరర్)',
    'nav.verify': 'ధృవీకరణ (వెరిఫై)',
    'nav.admin': 'అడ్మిన్ & ఆప్స్',
    'nav.review_queue': 'సమీక్ష జాబితా',
    'nav.login': 'లాగిన్ అవ్వండి',
    'nav.switch': 'మార్చండి',
    'nav.logout': 'లాగౌట్',
    'nav.network': 'నెట్‌వర్క్',
    'nav.sepolia': 'సెపోలియా టెస్ట్‌నెట్',
    'nav.language': 'భాష',

    // Titles
    'title.home': 'ఆయుర్వేద మూలికల బ్లాక్‌చెయిన్ ట్రేసబిలిటీ ప్లాట్‌ఫారమ్',
    'title.collector': 'సేకరణదారుల & రైతుల పోర్టల్',
    'title.aggregator': 'మండీ హబ్ & అగ్రిగేటర్',
    'title.lab': 'NABL క్వాలిటీ టెస్టింగ్ ల్యాబ్',
    'title.manufacturer': 'ఆయుష్ తయారీ & ఫార్ములేషన్ పోర్టల్',
    'title.verify': 'వినియోగదారుల ధృవీకరణ',
    'title.admin': 'ప్రోటోకాల్ అడ్మిన్ & ఆపరేషన్స్',

    // Auth Modal
    'auth.title': 'ధృవీకరణ లాగిన్',
    'auth.subtitle': 'మీ సరఫరా గొలుసు ఖాతాలోకి ప్రవేశించండి',
    'auth.phone_tab': 'మొబైల్ నంబర్',
    'auth.email_tab': 'ఈమెయిల్ చిరునామా',
    'auth.phone_placeholder': '9876543210',
    'auth.email_placeholder': 'stakeholder@ayush.org',
    'auth.send_otp': 'OTP పంపండి',
    'auth.enter_otp': '6 అంకెల OTP నమోదు చేయండి',
    'auth.otp_sent_to': 'ధృవీకరణ కోడ్ పంపబడింది:',
    'auth.verify_btn': 'ధృవీకరించి ప్రవేశించండి',
    'auth.resend': 'OTP మళ్లీ పంపండి',
    'auth.name_optional': 'మీ పేరు / సంస్థ పేరు (ఐచ్ఛికం)',
    'auth.dev_code_hint': 'పరీక్ష కోడ్: 123456 లేదా క్రింద చూపిన కోడ్',

    // Collector Dashboard
    'collector.harvest_now': '🌿 కొత్త పంటను నమోదు చేయండి',
    'collector.wallet': 'డిజిటల్ వాలెట్',
    'collector.my_harvests': 'నా పంట బ్యాచ్‌లు',
    'collector.step_gps': '1. GPS జియోఫెన్సింగ్ ధృవీకరణ',
    'collector.step_camera': '2. లైవ్ బొటానికల్ AI కెమెరా',
    'collector.step_nfc': '3. NFC సీల్ & బరువు (కిలోలు)',
    'collector.step_review': '4. సమీక్ష & బ్లాక్‌చెయిన్ నమోదు',
    'collector.select_aggregator': 'మండీ హబ్ / అగ్రిగేటర్‌ను ఎంచుకోండి',
    'collector.select_aggregator_placeholder': '-- మండీ హబ్‌ను ఎంచుకోండి --',
    'collector.weight_kg': 'పంట బరువు (కిలోలు)',
    'collector.notes': 'గమనికలు (ఐచ్ఛికం)',
    'collector.seal_id': 'బ్యాగ్ సీల్ / NFC ట్యాగ్ ID',
    'collector.submit_blockchain': '⛓️ బ్లాక్‌చెయిన్‌లో నమోదు చేయండి',
    'collector.offline_saved': 'ఆఫ్‌లైన్ క్యూలో సేవ్ చేయబడింది',
    'collector.withdraw_btn': 'డబ్బును విత్‌డ్రా చేసుకోండి (UPI / బ్యాంక్)',

    // Aggregator Dashboard
    'aggregator.title': 'ప్రాంతీయ మండీ సేకరణ కేంద్రం',
    'aggregator.tab_scan': 'బ్యాగ్‌ను స్కాన్ చేసి స్వీకరించండి',
    'aggregator.tab_accepted': 'స్వీకరించిన బ్యాగులు',
    'aggregator.tab_merge': 'కలపండి & ల్యాబ్‌కు పంపండి',
    'aggregator.tab_lots': 'సేకరించిన లాట్‌లు',
    'aggregator.accept_pay': 'స్వీకరించి ఎస్క్రో చెల్లింపును విడుదల చేయండి',
    'aggregator.target_lab': 'టార్గెట్ క్వాలిటీ ల్యాబ్‌ను ఎంచుకోండి',
    'aggregator.target_lab_placeholder': '-- NABL ల్యాబ్‌ను ఎంచుకోండి --',
    'aggregator.dispatch_btn': 'లాట్‌ను ల్యాబ్‌కు పంపండి',

    // Lab Dashboard
    'lab.title': 'NABL పరీక్ష & రసాయన విశ్లేషణ',
    'lab.tab_pending': 'పరీక్ష కోసం వేచి ఉన్నవి',
    'lab.tab_certificates': 'ధృవీకరించబడిన బ్యాచ్‌లు',
    'lab.chemical_assay': 'HPLC రసాయన విశ్లేషణ',
    'lab.purity_percent': 'క్రియాశీల సమ్మేళన స్వచ్ఛత (%)',
    'lab.pass_btn': 'బ్లాక్‌చెయిన్ సర్టిఫికేట్ జారీ చేయండి (పాస్)',
    'lab.fail_btn': 'తిరస్కరించండి (ఫెయిల్)',

    // Manufacturer Dashboard
    'mfg.title': 'ఆయుష్ తయారీ & ఫార్ములేషన్ కేంద్రం',
    'mfg.tab_marketplace': 'పరీక్షించిన లాట్‌లను చూడండి',
    'mfg.tab_formulate': 'ఫార్ములేషన్ బిల్డర్',
    'mfg.tab_qr': 'మాస్టర్ QR & లేబులింగ్',
    'mfg.tab_history': 'నమోదిత బ్యాచ్‌లు',
    'mfg.product_name': 'ఉత్పత్తి ఫార్ములేషన్ పేరు',
    'mfg.batch_units': 'యూనిట్లు (ఉదా. 250 బాటిళ్లు)',
    'mfg.retail_price': 'రిటైల్ ధర (₹)',
    'mfg.farmer_share': 'రైతులకు లభించిన నిజమైన వాటా',
    'mfg.register_formulation': '⛓️ ఫార్ములేషన్‌ను నమోదు చేసి మాస్టర్ QR ని సృష్టించండి',
    'mfg.download_qr': 'QR కోడ్ (PNG) డౌన్‌లోడ్ చేయండి',
    'mfg.print_labels': 'QR లేబుల్స్ ప్రింట్ చేయండి',
    'mfg.view_verify': 'స్కాన్ టెస్ట్ చేసి ధృవీకరణను చూడండి ➔',

    // Admin Dashboard
    'admin.title': 'మూల్‌పథ్ ప్రోటోకాల్ ఆపరేషన్స్ & రిజిస్ట్రీ',
    'admin.tab_overview': 'ప్రోటోకాల్ సమాచారం',
    'admin.tab_users': 'నమోదిత భాగస్వాములు',
    'admin.tab_products': 'ధృవీకరించబడిన ఉత్పత్తులు',
    'admin.tab_batches': 'మొత్తం బ్యాచ్‌లు',
    'admin.tab_zones': 'అనుమతించబడిన అటవీ మండలాలు',
    'admin.tab_fraud': 'అనుమానాస్పద జాబితా',
    'admin.tab_blockchain': 'బ్లాక్‌చెయిన్ ఎక్స్‌ప్లోరర్',
    'admin.total_farmers': 'మొత్తం సేకరణదారులు & రైతులు',
    'admin.total_kg': 'మొత్తం పంట పరిమాణం',
    'admin.total_payouts': 'విడుదలైన ఎస్క్రో చెల్లింపులు',
    'admin.total_products': 'ధృవీకరించబడిన ఫార్ములేషన్లు',

    // Verify Page
    'verify.title': 'ఉత్పత్తి స్వచ్ఛత & న్యాయమైన వాణిజ్య ధృవీకరణ',
    'verify.subtitle': 'ఉత్పత్తి మూలాన్ని ధృవీకరించడానికి QR లేదా సీరియల్ నంబర్‌ను నమోదు చేయండి',
    'verify.search_placeholder': 'ఫార్ములేషన్ లేదా బ్యాచ్ ID ని నమోదు చేయండి (ఉదా. 1, BATCH-MFG-1)',
    'verify.search_btn': 'ధృవీకరించండి',
    'verify.purity_guarantee': '100% ల్యాబ్ పరీక్షించబడిన నిజమైన ఆయుర్వేద మూలిక',
    'verify.farmer_share_card': 'రైతుకు నేరుగా లభించిన వాటా',
    'verify.timeline_title': 'బ్లాక్‌చెయిన్ సరఫరా గొలుసు కాలక్రమం',
    'verify.report_btn': 'నకిలీ / దెబ్బతిన్న సీల్‌ను నివేదించండి',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultVal?: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
  t: (key, defaultVal) => defaultVal || key,
  languages: LANGUAGES,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('mulpath_lang');
    if (saved && (saved === 'EN' || saved === 'HI' || saved === 'MR' || saved === 'TE')) {
      return saved as Language;
    }
    return 'EN';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mulpath_lang', lang);
    window.dispatchEvent(new Event('language-change'));
  };

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('mulpath_lang');
      if (saved && (saved === 'EN' || saved === 'HI' || saved === 'MR' || saved === 'TE')) {
        setLanguageState(saved as Language);
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('language-change', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('language-change', handleStorage);
    };
  }, []);

  const t = (key: string, defaultVal?: string): string => {
    const currentDict = translations[language] || translations.EN;
    if (currentDict[key]) return currentDict[key];
    const enDict = translations.EN;
    if (enDict[key]) return enDict[key];
    return defaultVal || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
