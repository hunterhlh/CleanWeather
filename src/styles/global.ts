import { StyleSheet } from 'react-native';




export const Sunnycolors = {
  background: '#f5e4bd',
  text: '#1c1a16',
  textSecondary: '#6b6557',
};

export const Rainingcolors = {
  background: '#1d242e',
  text: '#eef2f7',
  textSecondary: '#8d97a6',
};

export const Cloudycolors = {
  background: '#e3e4e2',
  text: '#23262a',
  textSecondary: '#74766f',
};

export const Snowcolors = {
  background: '#ffffff',
  text: '#1d2530',
  textSecondary: '#6a7585',
};

export const Emergencycolors = {
  background: '#1a1311',
  text: '#f7ece9',
  textSecondary: '#b59a95',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Sunnycolors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Sunnycolors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  headerloctime: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    color: Sunnycolors.textSecondary,
    fontFamily: 'JetBrainsMono',
    fontWeight: '400',
   },
  temperature: {
    fontSize: 148,
    color: Sunnycolors.text,
    fontFamily: 'InterTight',
    fontWeight: '100'
   },
  rightNow: {
    fontSize: 15,
    color: Sunnycolors.textSecondary,
    fontFamily: 'JetBrainsMono',
    fontWeight: '400',
   },
   feels: {
    fontSize: 18,
    color: Sunnycolors.textSecondary,
    fontFamily: 'JetBrainsMono',
    fontWeight: '400',
   }
});




