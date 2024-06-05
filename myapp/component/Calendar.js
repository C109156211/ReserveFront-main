import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./css/CalendarStyles"; // 導入樣式

function Calendar() {
  const daysOfWeek = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [highlightedDate, setHighlightedDate] = useState(null);
  const [todayHighlighted, setTodayHighlighted] = useState(false); // 新增狀態以檢查是否今天被選中

  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();

  const handlePreviousMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const generateCalendarDates = () => {
    const startDate = new Date(currentYear, currentMonth, 1);
    const endDate = new Date(currentYear, currentMonth + 1, 0);
    const startDay = startDate.getDay();
    const endDay = endDate.getDate();

    let dates = [];
    let week = [];

    // 處理上個月的日期
    const prevMonthEndDate = new Date(currentYear, currentMonth, 0).getDate();
    const prevMonthStartDay = startDay === 0 ? 6 : startDay - 1;
    for (let i = prevMonthEndDate - prevMonthStartDay + 1; i <= prevMonthEndDate; i++) {
      week.push({
        day: i,
        month: currentMonth - 1,
      });
    }

    for (let date = 1; date <= endDay; date++) {
      week.push({
        day: date,
        month: currentMonth,
      });
      if (week.length === 7) {
        dates.push(week);
        week = [];
      }
    }

    // 處理下個月的日期
    let nextMonthDate = 1;
    while (week.length < 7) {
      week.push({
        day: nextMonthDate,
        month: currentMonth + 1,
      });
      nextMonthDate++;
    }
    dates.push(week);

    return dates;
  };

  const currentMonthDates = generateCalendarDates();

  const handleDatePress = (date) => {
    if (date) {
      setHighlightedDate(date);
      const newSelectedDate = new Date(currentYear, currentMonth, date);
      setSelectedDate(newSelectedDate);
      // 檢查是否選中日期是今天
      const today = new Date();
      if (
        newSelectedDate.getDate() === today.getDate() &&
        newSelectedDate.getMonth() === today.getMonth() &&
        newSelectedDate.getFullYear() === today.getFullYear()
      ) {
        setTodayHighlighted(true); // 如果是今天，設置為高亮
      } else {
        setTodayHighlighted(false); // 否則取消高亮
      }
    }
  };
  
  return (
    <View style={styles.calendarContainer}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Image
              source={require('C:/Users/USER/ReserveFront-main/myapp/assets/shape.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.monthText}>
            {currentMonth + 1}月 {currentYear}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Image
              source={require('C:/Users/USER/ReserveFront-main/myapp/assets/shape (1).png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.daysOfWeekContainer}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.dayOfWeekText}>
            {day}
          </Text>
        ))}
      </View>
      {currentMonthDates.map((week, weekIndex) => (
        <View key={weekIndex} style={styles.weekContainer}>
          {week.map((date, dateIndex) => {
            const isCurrentMonth = date.month === currentMonth;
            const isToday =
              isCurrentMonth &&
              date.day === selectedDate.getDate() &&
              currentMonth === new Date().getMonth() &&
              currentYear === new Date().getFullYear();
            const isHighlighted = date.day === highlightedDate;
            const dateToShow = date.day || " ";
            return (
              <TouchableOpacity
                key={dateIndex}
                style={styles.dateTouchable}
                onPress={() => handleDatePress(date.day)}
              >
                <View
                  style={[
                    styles.dateContainer,
                    isHighlighted ? styles.highlightedDateContainer : null,
                  ]}
                >
                  <Text
                    style={[
                      styles.dateText,
                      !isCurrentMonth ? styles.nonCurrentMonthDate : null,
                      isToday ? styles.todayDate : null,
                      isHighlighted ? styles.highlightedDateText : null,
                    ]}
                  >
                    {dateToShow}
                  </Text>
                </View>
                {isToday && todayHighlighted && <View style={styles.todayMarker} />}
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

export default Calendar;
