import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Empty from 'src/containers/Empty';
import {homeTabs} from 'src/config/navigator';

const EmptyCategory = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <Empty
      icon="shopping-cart"
      title={t('empty:text_title_category')}
      subTitle={t('empty:text_subtitle_category')}
      titleButton={t('common:text_go_home')}
      clickButton={() => navigation.navigate(homeTabs.home)}
    />
  );
};

export default EmptyCategory;
