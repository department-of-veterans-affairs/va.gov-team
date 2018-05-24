// @todo Once this leaves beta, we'll have to decide if things should (confusedly) become "profile",
// since that is what the rest of the applications have known these properties as, even though from
// this point forward these attributes will be known as "account" information since it mostly comes
// from the IDP.
import profileInformation from '../../../../platform/user/profile/reducers';

export default { account: profileInformation };
