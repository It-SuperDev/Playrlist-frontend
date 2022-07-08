import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import SignUpBrand from '../views/SignUpBrand'
import SwitchAccount from '../views/SwitchAccount'
import ForgotUsername from '../views/ForgotUsername'
import ForgotPassword from '../views/ForgotPassword'
import BeforeSign from '../views/BeforeSign'
import About from '../views/About'
import OpeningHour from '../views/OpeningHour'
import ServicePro from '../views/ServicePro'
import Confirmed from '../views/Confirmed'
import GoogleLogin from '../views/GoogleLogin'
import TrainersFeed from '../views/TrainersFeed'
import AthletesDetails from '../views/AthletesDetails'
import BrandsDetails from '../views/BrandsDetails'
import Plans from '../views/Plans'
import PlansAthletes from '../views/PlansAthletes'
import Payments from '../views/Payments'
import PaymentsAthletes from "../views/PaymentsAthletes"
import BrandDashboard from '../views/BrandDashboard'
import AthletesItem from '../views/AthletesItem'
import ContactUs from '../views/ContactUs'
import Dashboard from '../views/Dashboard'
import Services from '../views/Services'
import Profile from '../views/Profile'
import ChangeInfo from '../views/ChangeInfo'
import ChangePassword from '../views/ChangePassword'
import SavedServices from '../views/SavedServices'
import ActiveServices from '../views/ActiveServices'
import HistoryServices from '../views/HistoryServices'
import MyWallet from '../views/MyWallet'
import UserProfile from '../views/UserProfile'
import AboutMe from '../views/AboutMe'
import TermPolicy from '../views/TermPolicy'
import AboutService from '../views/AboutService'

/**
 * User Navigator
 */
const Navigator = createStackNavigator(
	{
		SignInScreen: {
			screen: SignIn,
			navigationOptions: { headerShown: false },
		},
		SignUpScreen: {
			screen: SignUp,
			navigationOptions: { headerShown: false },
		},
		SignUpBrandScreen: {
			screen: SignUpBrand,
			navigationOptions: { headerShown: false },
		},
		SwitchAccountScreen: {
			screen: SwitchAccount,
			navigationOptions: { headerShown: false },
		},
		ForgotUsername: {
			screen: ForgotUsername,
			navigationOptions: { headerShown: false },
		},
		ForgotPassword: {
			screen: ForgotPassword,
			navigationOptions: { headerShown: false },
		},
		GoogleLoginScreen: {
			screen: GoogleLogin,
			navigationOptions: { headerShown: false },
		},
		AthletesDetailsScreen: {
			screen: AthletesDetails,
			navigationOptions: { headerShown: false },
		},
		DashboardScreen: {
			screen: Dashboard,
			navigationOptions: { headerShown: false },
		},
		ServicesScreen: {
			screen: Services,
			navigationOptions: { headerShown: false },
		},
		ProfileScreen: {
			screen: Profile,
			navigationOptions: { headerShown: false },
		},
		ChangeInfoScreen: {
			screen: ChangeInfo,
			navigationOptions: { headerShown: false },
		},
		ChangePasswordScreen: {
			screen: ChangePassword,
			navigationOptions: { headerShown: false },
		},
		SavedServicesScreen: {
			screen: SavedServices,
			navigationOptions: { headerShown: false },
		},
		TermPolicyScreen: {
			screen: TermPolicy,
			navigationOptions: { headerShown: false },
		},
		ActiveServicesScreen: {
			screen: ActiveServices,
			navigationOptions: { headerShown: false },
		},
		HistoryServicesScreen: {
			screen: HistoryServices,
			navigationOptions: { headerShown: false },
		},
		MyWalletScreen: {
			screen: MyWallet,
			navigationOptions: { headerShown: false },
		},
		MyProfileScreen: {
			screen: UserProfile,
			navigationOptions: { headerShown: false },
		},
		AboutMeScreen: {
			screen: AboutMe,
			navigationOptions: { headerShown: false },
		},
		BrandsDetailsScreen: {
			screen: BrandsDetails,
			navigationOptions: { headerShown: false },
		},
		PlansScreen: {
			screen: Plans,
			navigationOptions: { headerShown: false },
		},
		PlansAthletesScreen: {
			screen: PlansAthletes,
			navigationOptions: { headerShown: false },
		},
		TrainersFeedScreen: {
			screen: TrainersFeed,
			navigationOptions: { headerShown: false },
		},
		BeforeSignScreen: {
			screen: BeforeSign,
			navigationOptions: { headerShown: false },
		},
		PaymentsScreen: {
			screen: Payments,
			navigationOptions: { headerShown: false },
		},
		AthletesItemScreen: {
			screen: AthletesItem,
			navigationOptions: { headerShown: false },
		},
		PaymentsAthletesScreen: {
			screen: PaymentsAthletes,
			navigationOptions: { headerShown: false },
		},
		AboutScreen: {
			screen: About,
			navigationOptions: { headerShown: false },
		},
		AboutServiceScreen: {
			screen: AboutService,
			navigationOptions: { headerShown: false },
		},
		BrandDashboardScreen: {
			screen: BrandDashboard,
			navigationOptions: { headerShown: false },
		},
		OpeningHourScreen: {
			screen: OpeningHour,
			navigationOptions: { headerShown: false },
		},
		ServiceProScreen: {
			screen: ServicePro,
			navigationOptions: { headerShown: false },
		},
		ConfirmedScreen: {
			screen: Confirmed,
			navigationOptions: { headerShown: false },
		},
		ContactUsScreen: {
			screen: ContactUs,
			navigationOptions: { headerShown: false },
		},
	},
	{
		initialRouteName: 'SignInScreen'
	}
)

export default createAppContainer(Navigator)