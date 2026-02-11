// eSewa Test Credentials
export const ESEWA_TEST_PID = 'EPAYTEST';
export const ESEWA_URL = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';

// Khalti Test Credentials
export const KHALTI_PUBLIC_KEY = 'test_public_key_dc74e0fd57cb46cd93832aee0a390234'; // Replace with your actual test key if available

export const generateEsewaSignature = () => {
    // In a real app, this MUST be done on the backend to keep the secret key safe.
    // For client-side demo/testing with test credentials, we simulate or just omit strict validation if the gateway allows.
    // eSewa v2 requires a signature: hash_hmac('sha256', "total_amount,transaction_uuid,product_code", secret_key)

    // For the test environment 'EPAYTEST', the secret is usually '8gBm/:&EnhH.1/q'
    // Since we can't easily do crypto in browser without subtle issues, we will assume 
    // the user will implement the signature generation API route.

    return 'simulation_signature';
};

export const initiateKhaltiPayment = (amount, purchase_order_id, purchase_order_name, onSuccess, onError) => {
    if (!window.KhaltiCheckout) {
        console.error('Khalti SDK not loaded');
        return;
    }

    const config = {
        // replace with your public key
        "publicKey": KHALTI_PUBLIC_KEY,
        "productIdentity": purchase_order_id,
        "productName": purchase_order_name,
        "productUrl": window.location.href,
        "eventHandler": {
            onSuccess(payload) {
                console.log('Khalti Success:', payload);
                onSuccess(payload);
            },
            onError(error) {
                console.log('Khalti Error:', error);
                onError(error);
            },
            onClose() {
                console.log('Khalti widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const checkout = new window.KhaltiCheckout(config);
    checkout.show({ amount: amount * 100 }); // Amount in paisa
};
