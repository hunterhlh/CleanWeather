import { StyleSheet } from 'react-native';




export const Sunnycolors = {
  background: '#ede4cf',
  header: '#242444',
  surface: '#2a2a4a',
  primary: '#4fc3f7',
  text: '#1c1a16',
  textSecondary: '#6b6557',
  alert: '#ff5252',
};``


export const Rainingcolors = {
  background: '#ede4cf',
  header: '#242444',
  surface: '#2a2a4a',
  primary: '#4fc3f7',
  text: '#ffffff',
  textSecondary: '#a0a0b0',
  alert: '#ff5252',
};


export const Snowcolors = {
  background: '#ede4cf',
  header: '#242444',
  surface: '#2a2a4a',
  primary: '#4fc3f7',
  text: '#ffffff',
  textSecondary: '#a0a0b0',
  alert: '#ff5252',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Sunnycolors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Sunnycolors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Sunnycolors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: Sunnycolors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 150,
    color: Sunnycolors.text,
    fontFamily: 'InterTight',
    fontWeight: '300'
   }
});




