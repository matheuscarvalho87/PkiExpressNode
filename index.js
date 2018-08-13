'use strict';
const { BaseSigner } = require('./lib/base-signer');
const { PadesSignatureStarter } = require('./lib/pades-signature-starter');
const { PadesSigner } = require('./lib/pades-signer');
const { PkiExpressConfig } = require('./lib/pkiexpress-config');
const { PkiExpressOperator } = require('./lib/pkiexpress-operador');
const { SignatureFinisher } = require('./lib/signature-finisher');
const { SignatureStarter } = require('./lib/signature-starter');
const { Signer } = require('./lib/signer');
const { StandardSignaturePolicies } = require('./lib/standard-signature-policies');
const { TimestampAuthority } = require('./lib/timestamp-authority');

exports.BaseSigner = BaseSigner;
exports.PadesSignatureStarter = PadesSignatureStarter;
exports.PadesSigner = PadesSigner;
exports.PkiExpressConfig = PkiExpressConfig;
exports.PkiExpressOperator = PkiExpressOperator;
exports.SignatureFinisher = SignatureFinisher;
exports.SignatureStarter = SignatureStarter;
exports.Signer = Signer;
exports.StandardSignaturePolicies = StandardSignaturePolicies;
exports.TimestampAuthority = TimestampAuthority;