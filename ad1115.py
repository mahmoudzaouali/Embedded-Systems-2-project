import sys 
import time 
import Adafruit_ADS1x15

adc = Adafruit_ADS1x15.ADS1115()
value1 = adc.read_adc(0, 1)
value2 =adc.read_adc(1,1)
sys.stdout.write("%d,%d" %(value1,value2))
