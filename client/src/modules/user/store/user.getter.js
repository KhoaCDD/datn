import i18n from '../../../plugins/i18n';

const getters = {
    getListUsers(state) {
        let date;
        let genderMultiLanguage;
        const result = state.userList.map((item, index) => {
            genderMultiLanguage = i18n.t(`user.userList.${item.gender}`);
            const d = new Date(item.birthday);
            let month = `${d.getMonth() + 1}`;
            let day = `${d.getDate()}`;
            const year = d.getFullYear();
            if (month.length < 2) { month = `0${month}`; }
            if (day.length < 2) { day = `0${day}`; }
            date = [year, month, day].join('-');
            item.birthday = date;
            item.index = index + 1;
            item.genderMultiLanguage = genderMultiLanguage;
            return item;
        });
        return result;
    },
};

export default getters;
