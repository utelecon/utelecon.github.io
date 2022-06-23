---
title:UTokyo Antivirus Licenseの利用方法(iOS・iPadOS)
---

 このページでは，UTokyo Antivirus LicenseをiOS・iPadOSで利用する方法を説明します．このライセンスの概要については，「[ウイルス対策ソフトウェア包括ライセンス](..)」をご覧ください．
 

 
## インストール方法
{:#install}

1.	App Store を開き，「Enterprise Mobile Security」アプリを検索します．

1.	「入手」を選択し，インストールを開始します．
![アプリの入手](i_1_get_app.png){:.small}
1.	個人情報に関する規定を確認し，「同意して次へ」を選択します．
![規定の同意１](i_2_consent_to_regulations1.png){:.small}
![規定の同意２](i_3_consent_to_regulations2.png){:.small}

1.	インストールが完了すると，サーバの登録画面が表示されます．
「QRコードを使用して登録」を選択し，以下のQRコードを読み込みます．
![登録；　QRコード](i_4_registration_QRcode.png){:.small}
【QRコード】
![QRコード](i_5_QRcode.png){:.small}
　※QRコードは変更することがあります．エラーになる場合は最新の手順書をご覧ください．


1.	QRコードが読み込めない場合は，「手動で登録」を選択してください．
![登録；　登録キー](i_6_registration_registration_key.png){:.small}
以下の登録キーを入力し，「次へ」を選択します．
【登録キー】
![登録キー](i_7_registration_key.png){:.small}
※登録キーは変更することがあります．エラーになる場合は最新の手順書をご覧ください．
![登録キーの入力](i_8_enter_registration_key.png)(fig/2022-06-11-12-54-23.png){:.small}


1.	構成プロファイルのダウンロードが表示されますので，「許可」を選択します．
![構成プロファイルのダウンロードの許可](i_9_profile_download_permission.png){:.small}


1. 「このページを”ENT Security”で開きますか？」と表示された場合は，「キャンセル」を選択します．
![アプリの起動のキャンセル](i_10_cancel_application_launch.png){:.small}
1. 「設定」を開きます．
![インストール時のiOSの設定；　起動](i_11_launch_iOS_settings.png){:.small}

1. 「一般」を選択します．
![インストール時のiOSの設定；　一般](i_12_iOS_settings_general.png){:.small}　　　　　　  
「VPNとデバイス管理」を選択します．
![インストール時のiOSの設定；　VPNとデバイス管理](i_13_iOS_settings_vpn&devicemanagement.png){:.small}
「MDM登録プロファイル」を選択します．
![インストール時のiOSの設定；　MDM登録プロファイル](i_14_iOS_settings_MDM.png){:.small}

1. 「インストール」を選択します．
![MDM登録プロファイル；　インストール１](i_15_MDM_install1.png){:.small}　
「インストール」を選択します．
![MDM登録プロファイル；　インストール２](i_16_MDM_install2.png){:.small}
「信頼」を選択します．　
![MDM登録プロファイル；　インストール３](i_17_MDM_install3.png){:.small}
「完了」を選択します．
![MDM登録プロファイル；　インストールの完了](i_18_MDM_install_end.png){:.small}


1.	Mobile Securityのアプリを起動し，MDMステータスが最新になっていれば完了です．
![MDMステータス；　最新](i_19_MDM_status_latest.png){:.small}
インストール直後は下記のようにMDMステータスが非同期になることがあります．右下のアイコンをタップすると同期します．
![MDMステータス；　非同期](i_20_MDM_status_asynchronous.png){:.small}
![MDMステータス；　最新](i_21_MDM_status_latest.png){:.small}
セキュリティステータスの「＞」をタップし，「検索開始」を実施すると，ステータスが保護になります．
![アプリのセキュリティステータス；　完了１](i_22_app_security_status_end1.png){:.small}
![セキュリティの検索；　開始](i_23_app_security_status_start.png){:.small}
![アプリのセキュリティステータス；　完了２](i_24_app_security_status_end2.png){:.small}


## アンインストール方法
{:#uninstall}

1.	MobileSecurityのアイコンを長押しし，「Appを削除」を選択します．
![Appの削除1](un_1_app_delete1.png){:.small}


1.	「Appを削除」を選択します．
![Appの削除2](un_2_app_delete2.png){:.small}



1.	「削除」を選択します．
![Appの削除3](un_3_app_delete3.png){:.small}


1. 「設定」を開きます．
![アンインストール時のiOSの設定；　起動](un_4_settings_start.png){:.small}



1. 「一般」を選択します．
![アンインストール時のiOSの設定；　一般](un_5_settings_general.png){:.small}
「VPNとデバイス管理」を選択します．　　
![アンインストール時のiOSの設定；　VPNとデバイス管理](un_6_settings_vpn&devicemanagement.png){:.small}
「MDM登録プロファイル」を選択します．
![アンインストール時のiOSの設定；　MDM登録プロファイル](un_7_settings_MDM.png){:.small}



1. 「削除」を選択し，パスコードの入力後，再度「削除」を選択します．
これでアンインストールは終了です．
![MDM登録プロファイルの削除１](un_8_MDM_delete1.png){:.small}
![MDM登録プロファイルの削除２](un_9_MDM_delete2.png){:.small}
