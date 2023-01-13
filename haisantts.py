#coding=utf-8
import ctypes  
lib = ctypes.cdll.LoadLibrary("./libhaisantts.so")
lib.startHaisanTTS("现在是北京时间九点整")
