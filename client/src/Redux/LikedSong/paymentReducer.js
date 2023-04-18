const initialState = {
  plans: [
    {
      free: false,
      plan: "Mini",
      day: "From ₹7/day",
      account: "1 account on mobile only",
      adFree: "Ad-free music listening on mobile",
      group: "Group Session",
      download: "Download 30 songs on 1 mobile device",
      month12: "999",
      month6: "619",
      month3: "349",
      month1: "99",
      bg: "#0E8388",
      color: "white",
    },
    {
      free: true,
      plan: "Individual",
      day: "₹119/month after offer period",
      account: "1 account",
      adFree: "Ad-free music listening",
      group: "Group Session",
      download: "Download 10k songs/device on 5 devices",
      month12: "1,189",
      month6: "719",
      month3: "389",
      month1: "119",
      bg: "#1d75de",
      color: "white",
    },
    {
      free: true,
      plan: "Duo",
      day: "₹149/month after offer period",
      family: "For couples who live together",
      account: "2 accounts",
      adFree: "Ad-free music listening",
      group: "Group Session",
      download: "Download 10k songs/device, on 5 devices per account",
      month12: "1,799",
      month6: "899",
      month3: "499",
      month1: "149",
      bg: "#ffc862",
      color: "black",
    },
    {
      free: true,
      plan: "Family",
      day: "₹179/month after offer period",
      family: "For family who live together",
      account: "Up to 6 accounts",
      adFree: "Ad-free music listening on mobile",
      group: "Group Session",
      download: "Download 30 songs on 1 mobile device",
      month12: "2,149",
      month6: "1,075",
      month3: "595",
      month1: "179",
      bg: "#EB455F",
      color: "white",
    },
  ],
  currentPlan: 0,
  viewPayment: false,
  onPaymentPlan: {
    month: 1,
    price: null,
  },
  continuePayment: false,
  await: false,
};

const PaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PLAN": {
      return {
        ...state,
        currentPlan: action.payload,
        viewPayment: true,
      };
    }
    case "UPDATE USER PLAN": {
      return {
        ...state,
        onPaymentPlan: {
          month: action.payload.month,
          price: action.payload.price,
        },
      };
    }
    case "PROMO SUCCESS": {
      const num = parseFloat(state.onPaymentPlan.price.replaceAll(",", ""));
      const newPrice = Math.floor(num * 0.7);

      return {
        ...state,
        onPaymentPlan: {
          month: state.onPaymentPlan.month,
          price: newPrice,
        },
      };
    }
    case "CONTINUE PAYMENT": {
      return {
        ...state,
        continuePayment: true,
      };
    }
    case "AWAITING": {
      return {
        ...state,
        await: true,
      };
    }
    case "PREMIUM USER": {
      return {
        ...state,
        continuePayment: false,
        await: false,
      };
    }
    default:
      return state;
  }
};
export { PaymentReducer };
